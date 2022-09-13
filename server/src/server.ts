import express from 'express';

const app = express();

app.get('/add', (request, response) => {
  console.log('Hello world');
});

app.listen(3333);
