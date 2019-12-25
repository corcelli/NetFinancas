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
const router = express.Router();
const SalvaCliente = require('../models/CadastroCliente');
const SalvaLogin = require('../models/CadastroLogin');
const multer = require('multer');

//////////// Configuração do Upload do Arquivo.

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'arquivos')
  },
  filename: function (req, file, cb) {
    cb(null,Date.now() +'-'+file.originalname)
  }
})
 
var upload = multer({ storage: storage })


////////////




router.get('/cadastrologin', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.render('FormCadastroLogin');
    } else {
        res.redirect('/');
    }
});
 
router.get('/cadastrocliente', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.render('FormCadastrarCliente');
    } else {
        res.redirect('/');
    }
});



router.post('/salvacliente_',function(req, res){
        SalvaCliente.create({
            razaosocial:   req.body.razaosocial,
            nomefantasia:    req.body.nomefantasia,
            cpfcnpj:    req.body.cpfcnpj,
            email: req.body.email,
            observacao: req.body.observacao
        }).then(function(){res.redirect('/cadastro/cadastrocliente')}).catch(function(){res.send('Erro')});;
  
});


router.post('/salvaclientemaiscontrato',upload.single('myFile'),function(req, res,next){
        SalvaCliente.create({
            razaosocial:   req.body.razaosocial,
            nomefantasia:    req.body.nomefantasia,
            cpfcnpj:    req.body.cpfcnpj,
            email: req.body.email,
            observacao: req.body.observacao,
            nomearquivocontrato: req.file.filename
        });
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
 
        
  
});

//Adiciona os dados do fomulario de novo Login no banco de dados baseado no model correspondente.

    
router.post('/salvalogin',function(req, res){
        SalvaLogin.create({
            usuario:   req.body.login,
            senha:    req.body.senha,
            cpfcnpj:    req.body.cpfcnpj,
            email: req.body.email,
            observacao: req.body.observacao
        }).then(function(){res.redirect('/cadastro/cadastrologin')}).catch(error => console.log('This error occured', error));
            
    });

module.exports = router;