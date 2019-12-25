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

//Models do banco de dados e include de arquivos//
const apis = require('./routes/api_boleto_juno');
const cadastro = require('./routes/cadastros');
const CadastroCliente = require('./models/CadastroCliente');
const CadastroLogin = require('./models/CadastroLogin');
//const juno = require('./apis/api_cria_boleto_juno');
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
    
app.use('/api', apis);
app.use('/cadastro', cadastro)


//Tela de Login.

app.get('/',function(req, res){
        res.render('Login2');
    });
    

// route for user Login
app.route('/login')
    .get(sessionChecker, (req, res) => {
        res.render('Login2');
    })
    .post((req, res) => {
        var user = req.body.usuario,
            password = req.body.senha;

        CadastroLogin.findOne({ where: {usuario: user}}).then(function (user) {
            if (!user) {
                res.redirect('/login');
            } else if (!user.validPassword(password)) {
                res.redirect('/login');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/autenticado');
            }
        });
    });



//Rotas acessíveis somente depois de autenticado.

app.get('/autenticado', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/cadastrarboletojuno');
    } else {
        res.redirect('/login');
    }
});

app.get('/cadastrologin', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.render('FormCadastroLogin');
    } else {
        res.redirect('/login');
    }
});

app.get('/cadastrocliente', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.render('FormCadastrarCliente');
    } else {
        res.redirect('/login');
    }
});

app.get('/cadastrarboletojuno', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.render('FormCriarBoletoJuno');
    } else {
        res.redirect('/login');
    }
});


// route for user logout
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

//Adiciona os dados do fomulario de Clientes no banco de dados baseado no model correspondente.

app.post('/addcliente',function(req, res){
        CadastroCliente.create({
            razaosocial:   req.body.razaosocial,
            nomefantasia:    req.body.nomefantasia,
            cpfcnpj:    req.body.cpfcnpj,
            email: req.body.email,
            observacao: req.body.observacao
        }).then(function(){res.redirect('/cadastrocliente')}).catch(function(){res.send('Erro')});
            
    });


//Adiciona os dados do fomulario de novo Login no banco de dados baseado no model correspondente.

app.post('/addlogin',function(req, res){
        CadastroLogin.create({
            usuario:   req.body.login,
            senha:    req.body.senha,
            cpfcnpj:    req.body.cpfcnpj,
            email: req.body.email,
            observacao: req.body.observacao
        }).then(function(){res.redirect('/cadastrologin')}).catch(error => console.log('This error occured', error));
            
    });

app.listen('8080');