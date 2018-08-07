const express = require('express')
const router = express.Router()

const User = require('./../models/in_memo/user')

router.get('', (req, res) => {
    const {firstname, lastname, age} = req.query
    console.log(firstname)
    const u = new User(firstname, lastname, age)
    res.locals.user = u
    res.render('user')
})

module.exports = router
