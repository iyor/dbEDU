import config from 'config'
import express from 'express'
import router from 'router'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import path from 'path'
import favicon from 'serve-favicon'
import index from 'routes/index'
import users from 'routes/users'
import db from 'services/db'

//require('dotenv').config()        // Kan NOG tas bort

// Setup express app
var app = express();

// Setup new mongoDB
const mdb = new db(config.DB_URL);

// Setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup     -- DETTA KOM MED I TEMPLATE; BÖR TAS BORT
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public     -- DETTA KOM MED I TEMPLATE; BÖR TAS BORT
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));      -- DETTA KOM MED I TEMPLATE; BÖR TAS BORT
app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.listen(config.PORT);

// catch 404 and forward to error handler         -- DETTA KOM MED I TEMPLATE
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {       //  -- DETTA KOM MED I TEMPLATE
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
export default app
