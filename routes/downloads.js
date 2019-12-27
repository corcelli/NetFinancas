const express = require('express'); // import express js library
const app = express(); //create express js instance 
const path = require('path');
const router = express.Router();
// define a route to download a file 


router.get('/pdf/:file(*)',(req, res) => {
  var file = req.params.file;
  var fileLocation = path.join('./arquivos',file);
  console.log(fileLocation);
  res.download(fileLocation, file); 
});

module.exports = router;