const request = require('request');


var options = {
    url: 'https://sandbox.boletobancario.com/boletofacil/integration/api/v1/fetch-balance',
    method: 'GET',
    json: true,
    qs: {
    token: '66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584'
    }
};

//request.get('https://sandbox.boletobancario.com/boletofacil/integration/api/v1/fetch-balance?token=66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584',{ json: true },function(err,res,body)
request.get(options,function(err,res,body)
{if (err) { return console.log(err)}
  body.data.balance;
  console.log(JSON.parse(JSON.stringify(body)).data.balance);
  console.log(res.statusCode);
    
})
