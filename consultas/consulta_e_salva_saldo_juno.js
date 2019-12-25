const salvasaldo = require('../models/TB_SaldoHistoricoJuno');
const axios = require('axios');
const qs = require('querystring');
    //Toda a parte de geração do boleto via API usando o modulo AXIOS.
//configuração do header de envio.
const config = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
 };
    const url = 'https://sandbox.boletobancario.com/boletofacil/integration/api/v1/fetch-balance';
    const requestBody = ({
    token: '66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584',
   //responseType: 'JSON'
});
   
   
   axios.post(url, qs.stringify(requestBody), config)
  .then((response) => {
    //console.log(response.data);
    var valores_json = JSON.stringify(response.data.data);
    var valores_ok = JSON.parse(valores_json);
    //console.log(valores_ok.balance);
    //console.log(valores_ok.withheldBalance);
    //console.log(valores_ok.transferableBalance);
    //var balance = valores_ok.balance;
    //var transferableBalance = valores_ok.transferableBalance;
    //console.log((valores_ok.transferableBalance));
    //exports = valores;
    //console.log(valores_ok);
    salvasaldo.create({
            balance:   valores_ok.balance,
            transferableBalance: valores_ok.transferableBalance,
            withheldBalance:  valores_ok.withheldBalance
            });
    
    //module.exports = {valores: valores};
 },
    (error) => {console.log(error);});