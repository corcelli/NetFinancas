const express = require("express");
const router = express.Router();
const CadastroCliente = require('../models/CadastroCliente');


router.get('/deletacliente/:id', (req, res) => {
    if (req.session.user && req.cookies.user_sid){
        CadastroCliente.destroy({where:{id: req.params.id}}).then(
        res.redirect('/listaclientes'));
     } else {
        res.redirect('/');
    }
})
;
 

router.get('/deletacliente2/:id', function(req, res) {
        CadastroCliente.destroy({where: {'id': req.params.id}}).then(
        res.send('ok'));
    
})
; 
 
 
 //.then(funcion(){res.send('ok')}).catch(funcion(){res.send('ok')});
 
module.exports = router;