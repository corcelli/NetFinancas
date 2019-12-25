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


const CadastroCliente = require('../models/CadastroCliente');


router.get('/teste',(req, res) => {
    res.send("OK");
});


    //Toda a parte de geração do boleto via API usando o modulo AXIOS.
//configuração do header de envio.
const config2 = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
 };

//Endereço do ENDPOINT 
const url = 'https://sandbox.boletobancario.com/boletofacil/integration/api/v1/issue-charge';

//A rota que recebe os dados e processa.
router.post('/gerarboletojuno', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      const requestBody = ({
    token: '66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584',
    paymentTypes: 'req.body.tipopagamento',
    description: req.body.descricao,
    amount: req.body.valor,
    payerName: req.body.razaosocial,
    payerCpfCnpj: req.body.cpfcnpj,
    payerEmail: req.body.email,
    dueDate: req.body.datavencimento,
    responseType: 'JSON'
});
   axios.post(url, qs.stringify(requestBody), config2)
  .then((response) => {
    console.log(response.status);
    //console.log(response.data.data);
    //console.log('Data is:' + JSON.stringify(response.data.data));
    var valores_json = JSON.stringify(response.data.data);
    var valores_ok = JSON.parse(valores_json)
    console.log(valores_ok.charges);
    console.log(valores_ok.charges[0].code);
    console.log(valores_ok.charges[0].link);
    res.render('OperacaoEfetuada');
  },
    (error) => {console.log(error);
                res.render('ERROR')});
    }
    else {res.send("NÃO LOGADO")}
}
);


////////////////////////////////////////////////////////////////////////////////


router.post('/gerarboletojunocadastrocliente', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      const requestBody = ({
    token: '66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584',
    description: req.body.descricao,
    amount: req.body.valor,
    payerName: req.body.razaosocial,
    payerCpfCnpj: req.body.cpfcnpj,
    payerEmail: req.body.email,
    responseType: 'JSON'
});
   axios.post(url, qs.stringify(requestBody), config2)
  .then((response) => {
    console.log(response.status);
    //console.log(response.data.data);
    //console.log('Data is:' + JSON.stringify(response.data.data));
    var valores_json = JSON.stringify(response.data.data);
    var valores_ok = JSON.parse(valores_json)
    console.log(valores_ok.charges);
    console.log(valores_ok.charges[0].code);
    console.log(valores_ok.charges[0].link);
    res.render('OperacaoEfetuada');
  },
    (error) => {console.log(error);
                res.render('ERROR')});
    }
    else {res.send("NÃO LOGADO")}
}
);




////////////////////////////////////////////////////////////////////////////////


router.get('/gerarcobrancadadoscliente/:id', (req, res) => {
    
      CadastroCliente.findAll({where: {'id': req.params.id}}).then(function(cliente){
        res.render('gerar_cobranca_dados_cliente',{cliente: cliente});
        console.log(req.params.id);
        console.log({cliente: cliente});
    });
    
    
}
);


module.exports = router;