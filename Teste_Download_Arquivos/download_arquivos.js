const express = require('express'); // import express js library
const app = express(); //create express js instance 
const path = require('path');
// define a route to download a file 


app.get('/download/:file(*)',(req, res) => {
  var file = req.params.file;
  var fileLocation = path.join('../arquivos',file);
  console.log(fileLocation);
  res.download(fileLocation, file); 
});
 
app.listen(8080,() => {
  console.log(`application is running at: http://localhost:8000`);
});