const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const stocksRouter = require('./routes/stocks');
const testAPIRouter = require('./routes/testApi');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const uniqueSet = (items, uniqueBy = 'name') => {
  const uniqueResult = [];
  const map = new Map();
  for (const item of items) {
    if (!map.has(item[uniqueBy])) {
      map.set(item[uniqueBy], true);
      uniqueResult.push(item);
    }
  }
  return uniqueResult;
};

app.use('/', indexRouter);
app.use('/stocks', stocksRouter);
app.use('/testAPI', testAPIRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error =
    req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
