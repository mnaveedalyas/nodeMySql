'use strict';
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodeDb', 'root', 'root', {
   host: '127.0.0.1',
   dialect: 'mysql'
 });

const connectMysql = async () => {
   try {
       await sequelize.authenticate();
       console.log('Connection to MySQL has been established successfully.');
     } catch (error) {
       console.error('Unable to connect to the MySQL database:', error);
       process.exit(1);
     }
}

module.exports = {
   Sequelize: sequelize,
   connectMysql
}
