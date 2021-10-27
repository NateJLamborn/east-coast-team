var createError = require('http-errors');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var passport = require('passport');
var session = require('express-session'); 
var cors = require("cors");
var hbs  = require('express-handlebars');

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var inventoryRouter = require('./routes/inventory')
var shopRouter = require('./routes/shop')

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'index', layoutsDir: __dirname + '/views'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function (req, res) {
  res.render('index');
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(session({ secret: 'perilous journey' }));
app.use(passport.initialize());  
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inventory', inventoryRouter)
app.use('/shop', shopRouter)

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
