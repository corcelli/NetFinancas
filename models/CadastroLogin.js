const db = require('./ConexaoBanco');
var bcrypt = require('bcrypt');

const Login = db.sequelize.define('login_', {
    id: {
        type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true 
    },
    usuario: {
        type: db.Sequelize.STRING,
        unique: true,
        allowNull: false

    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: false

    },
    email: {
        type: db.Sequelize.STRING,
        unique: true,
        allowNull: false

    },
    observacao: {
        type: db.Sequelize.TEXT
    }
},
//##
 {hooks: {
     beforeCreate: (login_) => {
     const salt = bcrypt.genSaltSync();
        login_.senha = bcrypt.hashSync(login_.senha, salt);
      }
    }
 });
    instanceMethods:
      Login.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.senha);
     };
//##
    
    

//Força a criação da table mesmo se existir.
//Login.sync({force: true});

//Cria tabela se não existir
Login.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));


module.exports = Login;

