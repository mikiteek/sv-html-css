const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/test', (req, res, next) => {
  next();
});

app.get('/test', (req, res, next) => {
  res.end('<h1>Hello<h1>');
});

app.get('/profile/:id/:name', (req, res, next) => {
  res.send(`Hello, you are user ${req.params.name} with # ${req.params.id}`);
});

app.use('/test', (err, req, res, next) => {
  res.status(500).send(`Some error: ${err}`);
});
// отдавать файл form.html например
app.get('/newform', (req, res, next) => {
  res.sendFile(__dirname + 'public/form/index.html'); //обратить внимание на путь и название
});

app.post('/form', (req, res, next) => {
  res.end(`You send data: ${JSON.stringify(req.body, null, 4)}`);
});

app.listen(3000);
//закончил писать на 50-й минуте
