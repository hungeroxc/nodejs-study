const express = require('express')
const router = express.Router()

const User = require('./../models/in_memo/user')

const UserService = require('../services//user_service')

// 用户的增加和查看
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

// 用户描述相关
router.get('/:userId', (req, res) => {
    const user = UserService.getUserById(Number(req.params.userId))
    res.locals.user = user
    console.log(user)
    res.render('des')
})


module.exports = router
