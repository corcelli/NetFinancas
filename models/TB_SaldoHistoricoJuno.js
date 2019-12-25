const db = require('./ConexaoBanco')

const SaldoHistoricoJuno = db.sequelize.define('saldo_historico_juno_', {
    id: {
        type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true 
    },
    balance: {
        type: db.Sequelize.TEXT
    },
    withheldBalance: {
        type: db.Sequelize.TEXT
    },
    transferableBalance: {
        type: db.Sequelize.TEXT
    }
})

//CadastroCliente.sync({force: true});
SaldoHistoricoJuno.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));
    
module.exports = SaldoHistoricoJuno

