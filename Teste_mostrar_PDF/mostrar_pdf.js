const express = require('express'); // import express js library
const app = express(); //create express js instance 
const path = require('path');
const router = express.Router();
const fs = require('fs');

app.get('/mostrarpdf/:file(*)', function(request, response){
  var file = request.params.file;
  var fileLocation = path.join('..','/arquivos/',file);
  console.log(fileLocation);
  fs.readFile(fileLocation, function (err,data){
      if (err) {
        return console.log(err);
    }
     response.contentType("application/pdf");
     response.send(data);
  });
});

app.listen('8080');