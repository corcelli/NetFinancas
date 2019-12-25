const db = require('./ConexaoBanco');

const DadosRespostaCobrancaJuno = db.sequelize.define('dados_resposta_cobranca_juno_', {
    id: {
        type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true 
    },
    code: {
        type: db.Sequelize.INTEGER
    },
    reference: {
        type: db.Sequelize.TEXT
    },
    checkoutUrl: {
        type: db.Sequelize.TEXT
    },
    link: {
        type: db.Sequelize.TEXT
    },
    payNumber: {
        type: db.Sequelize.TEXT
    },
    barcodeNumber: {
        type: db.Sequelize.TEXT
    },
    dueDate: {
        type: db.Sequelize.TEXT
    }
});

//DadosRespostaCobrancaJuno.sync({force: true});
DadosRespostaCobrancaJuno.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));
    
module.exports = DadosRespostaCobrancaJuno;

