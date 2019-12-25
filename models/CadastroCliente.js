const db = require('./ConexaoBanco')

const CadastroCliente = db.sequelize.define('cadastrocliente_', {
    id: {
        type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true 
    },
    razaosocial: {
        type: db.Sequelize.TEXT
    },
    nomefantasia: {
        type: db.Sequelize.TEXT
    },
    cpfcnpj: {
        type: db.Sequelize.TEXT
    },
    email: {
        type: db.Sequelize.TEXT
    },
    nomearquivocontrato: {
        type: db.Sequelize.TEXT
    },
    observacao: {
        type: db.Sequelize.TEXT
    }
})

//CadastroCliente.sync({force: true});
CadastroCliente.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));
    
module.exports = CadastroCliente

