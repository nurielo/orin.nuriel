var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
//html route
app.get("/cv",(req,res)=>{
  res.sendFile(path.join(__dirname,"./views"))
});

app.get("/myFirstHtml",(req,res)=>{
  res.sendFile(path.join(__dirname,"./views"))
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const sql= require('./db');
const express=require('express');
const bodyParser = require("body-parser");
const app=express();

// parse requests of contenttype: application/json
app.use(bodyParser.json());

// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));
// simple route
app.get("/", (req, res) => {
res.json({ message: "Welcome to web course example application." });
});

//get contact 
app.get("/contact",function(req,res){
    sql.query("select * from contact",(err,mysqlres)=>{
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting all contact: " + err});return;
            }
            console.log("got all contact...");
            res.send(mysqlres);
            return;
            });
            });


// set port, listen for requests
app.listen(3000, () => {
console.log("Server is running on port 3000."
);
});
