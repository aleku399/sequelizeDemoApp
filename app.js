const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const exphbs = require('express3-handlebars');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const todos = require('./routes/api/todos');
// const todoItem = require('./routes/api/todoitems');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());

app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', todos);
// app.use('/api', todos);
// app.get('/', (req, res) => {
//     res.render('index');
// });

// catch 404 and forward to error handler
app.use(function(req, res) {
  let err = new Error('Not Found');
  err.status = 404;
  res.send(err.message);
  // next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
// TODO:to add am error view
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});


module.exports = app;

