const request = require('request');
const dados = require('./models/DadosGetParaBanco');
const express = require("express");
const app = express();

request.get('https://sandbox.boletobancario.com/boletofacil/integration/api/v1/list-charges?token=66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584', { json: true }, (err, res, body) => {
    if (err) {
        return console.log(err);
    }

    // print the users
    //body.data(charges => {
        console.log(body);
    });

