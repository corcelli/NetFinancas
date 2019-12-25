const axios = require('axios');
const dados = require('./models/DadosGetParaBanco');
const express = require("express");
const app = express();
var request = require("request");
 var t = this;


var dados2 = function getdata() {
    axios.get('https://dog.ceo/api/breeds/list/all').then(resp => {
    return (JSON.stringify(resp.data.message.waterdog));
        })}

async function makeRequest() {

    const config = {
        method: 'get',
        url: 'https://dog.ceo/api/breeds/list/all'
    };
    let res = await axios(config);
    //console.log(res.data.message.waterdog);
    //d.this = JSON.stringify(res.data.message.waterdog);
    
}

//makeRequest();
dados2();
console.log(dados2());


app.get('/getparabanco',function(req, res) {
    request("https://dog.ceo/api/breeds/list/all", function(error, response, body) {
  var waterdog = (JSON.parse(body));
  var teste = waterdog['message']['waterdog']});
        dados.create({
            dado:   teste
            }).then(function(){res.redirect('/')}).catch(error => console.log('This error occured', error));
            
    });
    
    
var request = require("request");

request("https://dog.ceo/api/breeds/list/all", function(error, response, body) {
  //console.log(JSON.stringify(body));
  var waterdog = (JSON.parse(body))
  console.log(waterdog['message']['waterdog'])
  var waterdog2 = waterdog['message']['waterdog']
});
    
app.listen('8080');