const express = require('express')
const router = express.Router()

const User = require('./../models/in_memo/user')

const UserService = require('../services//user_service')

router.get('/', (req, res) => {
    const users = UserService.getAllUsers()
    res.locals.users = users
    res.render('user')
})

router.post('/', (req, res) => {
    const {firstname, lastname, age} = req.body
    const u = UserService.insertNewUser(firstname, lastname, age)
    res.json(u)
})


module.exports = router
