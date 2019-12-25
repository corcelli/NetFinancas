var http = require('http');
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
const request = require('request');
const axios = require('axios');
const qs = require('querystring');

const requestBody2 = {
    token: '66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584',
    description: 'Descrição',
    amount: '1000.30',
    payerName: 'Tiago Corcelli',
    payerCpfCnpj: '05042527478'
};

const config = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
 };
 
 const url = 'https://sandbox.boletobancario.com/boletofacil/integration/api/v1/issue-charge';

//axios.post(url, qs.stringify(requestBody), config)
//  .then((response) => {
    //console.log(response.status);
    
//  },
//    (error) => {console.log(error)});
    

app.post('/gerarboletojuno', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      const requestBody = {
    token: '66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584',
    description: req.body.descricao,
    amount: req.body.valor,
    payerName: req.body.razaosocial,
    payerCpfCnpj: req.body.cpfcnpj,
    payerEmail: req.body.email
};
   axios.post(url, qs.stringify(requestBody), config)
  .then((response) => {
    console.log(response.status);
    
  },
    (error) => {console.log(error)});

    }
},
);

app.get('/', (req, res) => {
        res.render('FormCriarBoletoJuno');
    });

app.listen('8080');