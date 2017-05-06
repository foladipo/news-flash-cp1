import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log('Node app is running on port', port);
});
