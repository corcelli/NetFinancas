
const Sequelize = require('sequelize');
const sequelize = new Sequelize('financeiro', 'postgres',  '10203040', {
    host: "localhost",
    dialect: 'postgres'
});
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};