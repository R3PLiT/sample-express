import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('Hello About!')
});

app.get('/home', (req, res) => {
  res.send('Hello Home!')
});

app.listen(3000, () => {
  console.log('Express server initialized');
});