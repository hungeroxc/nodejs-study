const express = require('express')

const app = express()

// 中间件鉴权测试

app.use(require('./middlewares/auth'))

// 中间件的使用, 声明周期由上往下传递
app.use((req, res, next) => {
    // 设置的属性可以被下一个中间件接收到
    req.duang = 1
    const a = {
        b: 1,
        c: 2
    }
    next(a)
})

// app.use((req, res) => {
//     console.log(req.duang)
//     res.end('123')
// })

// 错误处理
app.use((err, req, res, next) => {
    console.log(err)
    res.json(err)
})

app.listen(3000)

