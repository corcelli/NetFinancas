const request = require('request');
const express = require("express");
const app = express();

app.post('/gerarboletojuno', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        const gerarboletojuno = {
    url: 'https://sandbox.boletobancario.com/boletofacil/integration/api/v1/issue-charge',
    form: {
      token: "66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584",
      description: req.body.descricao,
      amount: req.body.valor,
      payerName: req.body.razaosocial,
      payerCpfCnpj: req.body.cpfcnpj,
      payerEmail: req.body.email,
      responseType: "JSON"
      
    }
};


request.post(gerarboletojuno, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    (JSON.stringify(gerarboletojuno));
    //res.end();
});
    } else {
        res.redirect('/login');
    }
});