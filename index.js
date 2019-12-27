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


//Models do banco de dados e include de arquivos//
const atualizasaldo = require('./funcoes/func_consulta_e_salva_saldo_juno');
const AtualizaSaldo = require('./funcoes/func_atualiza_tela_saldo');
const apis = require('./routes/api_boleto_juno');
const apis_ler_dados = require('./routes/api_ler_dados');
const deletar = require('./routes/deletar');
const cadastro = require('./routes/cadastros');
const CadastroCliente = require('./models/CadastroCliente');
const CadastroLogin = require('./models/CadastroLogin');
const apicartaojuno = require('./routes/api_cartao_juno');
const SaldoHistoricoJuno = require('./models/TB_SaldoHistoricoJuno');
const downloads = require('./routes/downloads');
const mostrarpdf = require('./routes/mostrar_pdf_navegador');
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
app.use('/cadastro', cadastro);
app.use('/apiread', apis_ler_dados);
app.use('/deletar', deletar);
app.use('/downloads', downloads);
app.use('/mostrarpdf', mostrarpdf);
//Tela de Login.

app.get('/', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        
        atualizasaldo.foo();
        setTimeout(() => atualizasaldo.AtualizaSaldo(),2000);
        
        SaldoHistoricoJuno.findAll({order: [['createdAt','DESC']],limit : 1}).then(function(saldo){
        res.render('TelaInicialSistema',{saldo: saldo});
    });
       // res.render('TelaInicialSistema');
    } else {
        res.sendFile(__dirname+'/views/Login.html');
    }
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
                res.redirect('/');
            } else if (!user.validPassword(password)) {
                res.redirect('/');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/autenticado');
            }
        });
    });



//Rotas acessíveis somente depois de autenticado.

app.get('/autenticado', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        SaldoHistoricoJuno.findAll({order: [['createdAt','DESC']],limit : 1}).then(function(saldo){
        res.render('TelaInicialSistema',{saldo: saldo});
    });
       // res.render('TelaInicialSistema');
    } else {
        res.redirect('/');
    }
});


app.get('/cadastrarboletojuno', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.render('FormCriarBoletoJuno');
    } else {
        res.redirect('/');
    }
});

app.get('/criarcobrancacartao', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.render('FormCriarCobrancaCartao');
    } else {
        res.redirect('/');
    }
});


app.get('/listaclientes', function(req, res){
    CadastroCliente.findAll().then(function(clientes){
        res.render('ListaClientes',{clientes: clientes});
    });
});



// route for user logout
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/');
    }
});

//Adiciona os dados do fomulario de Clientes no banco de dados baseado no model correspondente.




app.listen('8080');