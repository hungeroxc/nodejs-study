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

router.get('/:userId', (req, res) => {
    const user = UserService.getUserById(Number(req.params.userId))
    res.locals.user = user
    res.render('des')
})

// 用户订阅相关
router.post('/:userId/subscription', (req, res, next) => {
    try {
        const sub = UserService.createSubscription(Number(req.params.userId), req.body.url)
        console.log(sub)
        res.json(sub)
    } catch (e) {
        next(e)
    }

})


module.exports = router
