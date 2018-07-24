const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// 多个中间件测试
function mw1(options) {
    return (req, res, next) => {
        console.log(req.body)
        console.log('mw1')
        next()
    }
}

function mw2(req, res, next) {
    console.log('mw2')
    next()
}

function mw3(req, res, next) {
    console.log('mw3')
    res.end('done')
}

app.use(mw1(), [mw2, mw3])

// 错误处理
app.use((err, req, res, next) => {
    console.log(err)
    res.end(err)
})

app.listen(3000)

