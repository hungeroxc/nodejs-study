const express = require('express')

const app = express()

// 中间件的使用
app.use((req, res, next) => {
    console.log(321)
    next()
})

app.use((req, res) => {
    res.end('123')
})

app.listen(3000)

