"use strict";

var Models = require("../models");

const getUsers = (req, res) => {
   Models.Users.findAll({}).then(function (data) {
       res.send({result: 200 , data: data})
   }).catch(err => {
       throw err
   })
}

const createUser = (req, res) => {
    let data = req.body;
   Models.Users.create(data).then(function (data) {
       res.send({ result: 200 , data: data})
   }).catch(err => {
       throw err
   })
}

module.exports = {
   getUsers, createUser
}
