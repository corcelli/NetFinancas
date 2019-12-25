const request = require('request');
const dados = require('./models/DadosGetParaBanco');
const express = require("express");
const app = express();

app.get('/getparabanco',function(req, res) {
request.get('https://reqres.in/api/users', { json: true }, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    // print the users
    body.data.map(users => {
        dados.create({
            nome:   users.first_name,
            email:  users.email
            });
    });
});
  res.redirect('/');
});


app.listen('8080');