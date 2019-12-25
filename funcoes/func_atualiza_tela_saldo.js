const SaldoHistoricoJuno = require('../models/TB_SaldoHistoricoJuno');

    //Toda a parte de geração do boleto via API usando o modulo AXIOS.
//configuração do header de envio.

module.exports = {
AtualizaSaldo: function() {
        SaldoHistoricoJuno.findAll({order: [['createdAt','DESC']],limit : 1}).then(function(saldo){
        //console.log(saldo.length);
        console.log(saldo[0].balance);
    });
    
  }
};

