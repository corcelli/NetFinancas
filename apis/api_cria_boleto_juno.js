const request = require('request');

const options = {
    url: 'https://sandbox.boletobancario.com/boletofacil/integration/api/v1/issue-charge',
    form: {
      token: "66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584",
      description: 1010,
      amount: 22.80,
      payerName: "Tiago Corcelli",
      payerCpfCnpj: "05042527478",
      payerEmail: "tiagocorcelli@gmail.com",
      responseType: "JSON"
      
    }
};

request.post(options, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Status: ${res.statusCode}`);
    console.log(body);
});