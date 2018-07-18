const express = require('express')

const app = express()

// 中间件的使用, 声明周期由上往下传递
app.use((req, res, next) => {
    // 设置的属性可以被下一个中间件接收到
    req.duang = 1
    next()
})

app.use((req, res) => {
    console.log(req.duang)
    res.end('123')
})

app.listen(3000)

