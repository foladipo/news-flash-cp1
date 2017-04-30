import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import firebaseAdmin from 'firebase-admin';
import firebaseAdminServiceAccount from './privateFiles/firebaseAdminServiceAccount.json';
import index from './routes/index';
import dashboard from './routes/dashboard';

dotenv.config();

const firebaseApp = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebaseAdminServiceAccount),
  databaseURL: process.env.FIREBASE_DB_URL,
});
const firebaseAuth = firebaseApp.auth();

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, '/dist')));

app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.all('*', (req, res, next) => {
  const idToken = req.cookies.idToken;
  const urlPath = req.path;

  if (idToken === undefined || idToken === 'null') {
    if (urlPath === '/') {
      next();
    } else {
      res.redirect('/');
    }
  } else {
    firebaseAuth.verifyIdToken(idToken)
      .then(() => {
        if (urlPath === '/') {
          res.redirect('/dashboard');
        } else {
          next();
        }
      }).catch(() => {
        if (urlPath === '/') {
          next();
        } else {
          res.redirect('/');
        }
      });
  }
});

app.use('/', index);
app.use('/dashboard', dashboard);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
