{"filter":false,"title":"request_api.js","tooltip":"/request_api.js","undoManager":{"mark":5,"position":5,"stack":[[{"start":{"row":0,"column":0},"end":{"row":27,"column":3},"action":"insert","lines":["app.post('/gerarboletojuno', (req, res) => {","    if (req.session.user && req.cookies.user_sid) {","        const gerarboletojuno = {","    url: 'https://sandbox.boletobancario.com/boletofacil/integration/api/v1/issue-charge',","    form: {","      token: \"66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584\",","      description: req.body.descricao,","      amount: req.body.valor,","      payerName: req.body.razaosocial,","      payerCpfCnpj: req.body.cpfcnpj,","      payerEmail: req.body.email,","      responseType: \"JSON\"","      ","    }","};","","","request.post(gerarboletojuno, (err, res, body) => {","    if (err) {","        return console.log(err);","    }","    (JSON.stringify(gerarboletojuno));","    //res.end();","});","    } else {","        res.redirect('/login');","    }","});"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":35},"action":"insert","lines":["const request = require('request');"],"id":3}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":22},"action":"insert","lines":["const app = express();"],"id":4}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":35},"action":"insert","lines":["const express = require(\"express\");"],"id":6}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":35},"end":{"row":1,"column":35},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1576093370928,"hash":"508d45b626b90754551fb8a9d4450b5be60f0137"}