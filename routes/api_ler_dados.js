const request = require('request');
const dados = require('..//models/DadosGetParaBanco');
const express = require("express");
const router = express.Router();

router.get('/getparabanco',function(req, res) {if (req.session.user && req.cookies.user_sid) {
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
  res.redirect('/autenticado');
} else {
        res.redirect('/login');
    }});

module.exports = router;
