const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');
const app = express();
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const livroRouter = require('./routes/livros');

const corsOptions = {
  origin: '*',
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send({ mensagem: 'Bem-vindo(a) à Livraria React-Next-Angular-Mongo!' });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/livros', livroRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
