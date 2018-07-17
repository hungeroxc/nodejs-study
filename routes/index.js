var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {title: '大春春'})
})

module.exports = router
