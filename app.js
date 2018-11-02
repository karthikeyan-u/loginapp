var express = require('express');
var app = express();
var mongoose = require('mongoose');
var User = require('./models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var bodyParser = require('body-parser');


//////////////////////////////////////////////////////////MIDDLEWARE AND DB SETUP/////
mongoose.connect('mongodb://localhost/loginapp',{ useNewUrlParser: true });
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
    secret:'Karthikeyan',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(new User.serializeUser());
passport.deserializeUser(new User.deserializeUser());
/////////////////////////////////////////////////////////////ROUTES//////
app.get('/',function(req,res){
    res.render('home');
});

app.listen(process.env.PORT||3000,function(){
    console.log('Server Started');
});