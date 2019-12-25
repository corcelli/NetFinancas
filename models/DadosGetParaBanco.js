const db = require('./ConexaoBanco');

const Dados = db.sequelize.define('dados_funcao_get_', {
    id: {
        type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true 
    },
    nome: {
        type: db.Sequelize.STRING,
        unique: false,
        allowNull: false
    },

    email: {
        type: db.Sequelize.STRING,
        unique: false,
        allowNull: false
    }

});
//Força a criação da table mesmo se existir.
//Login.sync({force: true});

//Cria tabela se não existir
Dados.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));


module.exports = Dados;

