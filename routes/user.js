const express = require('express')
const router = express.Router()

const users = []

/* GET home page. */
router.route('/')
    .get((req, res, next) => {
        console.log(users)
        res.json(users)
    })
    .post((req, res) => {
        const user = req.query
        users.push(user)
        res.json(user)
    })

module.exports = router
