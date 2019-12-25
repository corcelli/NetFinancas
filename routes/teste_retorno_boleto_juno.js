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

router.get('/teste',(req, res) => {
    res.send("OK");
});


    //Toda a parte de geração do boleto via API usando o modulo AXIOS.
//configuração do header de envio.
const config = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
 };

//Endereço do ENDPOINT 

const url = 'https://sandbox.boletobancario.com/boletofacil/integration/api/v1/issue-charge';

    const requestBody = ({
    token: '66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584',
    paymentTypes: 'BOLETO',
    description: 'Teste de Boleto',
    amount: '10.00',
    payerName: 'Corcelli',
    payerCpfCnpj: '05042527478',
    payerEmail: 'email@email.com',
    responseType: 'JSON'
});
   axios.post(url, qs.stringify(requestBody), config)
  .then((response) => {
    //console.log(response.data.data);
    var valores_json = JSON.stringify(response.data.data);
    var valores_ok = JSON.parse(valores_json)
    console.log(valores_ok.charges);
    console.log(valores_ok.charges[0].code);
    console.log(valores_ok.charges[0].link);
    
  },
    (error) => {console.log(error);});
    

;



module.exports = router;