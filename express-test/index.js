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

// app.use(mw1(), [mw2, mw3])

// 路径控制
/**
 * @description 用于请求控制(网关)
 * 
 * 1、根目录打印mw1和mw3
 * 2、加上article打印mw1、mw2、mw3
 */
// app.use('/', mw1())
// app.use('/article', mw2)
// app.use(mw3)

/**
 * @description 加上请求方式控制
 * 
 * article只针对get请求响应，user只针对post请求响应，跟路由针对所有请求响应
 */
app.use('/', mw1())
app.get('/article', mw2)
app.post('/user', mw3)

// 错误处理
app.use((err, req, res, next) => {
    console.log(err)
    res.end(err)
})

app.listen(3000)

