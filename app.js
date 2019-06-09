import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const { NODE_ENV, PORT = 5000 } = process.env;
if (NODE_ENV === 'production') {
  app.use(express.static(__dirname));
} else {
  app.use(express.static(path.join(__dirname, '/dist')));
}

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Node app is running on port', PORT);
});
