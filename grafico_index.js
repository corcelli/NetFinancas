//Modulo Express
//var http = require('http');
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
const axios = require('axios');
const qs = require('querystring');
const fs = require('fs');
var d3 = require("d3");
//########//

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));


// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }    
};

//Modulo BodyParser
const BodyParser = require("body-parser");

//Config Template HTML Engine
app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

//Parametros do modulo BodyParser
    app.use(BodyParser.urlencoded({extended: false}));
    //app.use(BodyParser.json)

// Configurar o express qual a pasta de arquivos estáticos nesse caso a pasta public

app.use(express.static(path.join(__dirname,"public")));

//Apendando os arquivos com as rotas separadas.
    //Redireciona as rotas do grupo das APIs


//Tela de Login.

app.get('/',function(req, res){
    if (req.session.user && req.cookies.user_sid) {
        res.render('TelaInicialSistema');}
    else {
        res.sendFile(__dirname+'/grafico.html');;
    }    
    });
    





app.listen('8080');