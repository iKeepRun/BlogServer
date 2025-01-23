var createError = require('http-errors');
var express = require('express');
var path = require('path');
const fs=require("fs")
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const blogRouter=require("./routes/blog");
const userRouter=require("./routes/user");
const session=require("express-session");
const {RedisStore}=require("connect-redis");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));      //开发环境使用的日志格式  比较简洁

const fullname=path.resolve(__dirname,"log","access.log")
const writeStream=fs.createWriteStream(fullname,{
  flags:"a"
})

app.use(logger('combined',{
  stream:writeStream
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const {redisClient}=require("./db/redis");
const sessionStore = new RedisStore({
  client: redisClient
});


app.use(session({
  secret:"Zdadw4_51978%$#GFRV_",
  cookie:{
    // path:"/",       //默认配置可省略
    // httpOnly:true,   //默认配置可省略
    maxAge:24*60*60*1000  //过期时间
  },
  store:sessionStore,
  resave: false,                // 不要强制重新保存会话
  saveUninitialized: false 
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api/blog",blogRouter);
app.use("/api/user",userRouter);
// app.use("/api/user",userRouter);
// app.use("/api/user",userRouter);
// app.use("/api/user",userRouter);


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
