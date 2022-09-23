'use strict'
const Users = require('./users')
async function init () {
  await Users.sync();
};
init();
module.exports = {
  Users
};
