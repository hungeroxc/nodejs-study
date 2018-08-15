// 引入mongoose
const mongoose = require('mongoose')
// 替换promise
mongoose.Promise = Promise
// 使用mongodb协议进行本地连接
const uri = `mongodb://localhost:27017/mongodb`

const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId
// Object = mongoose.Types.ObjectId

// 链接数据库
const connection = mongoose.connect(uri, {useNewUrlParser: true})
const db = mongoose.connection


// 编写users表的schema
const UserSchema = new Schema({
    name: {type: String, required: true, unique: true, index: 1},
    age: {type: Number, max: 188, min: 0}
})

// 该步会在db里生成一个名叫user的表
const UserModel = mongoose.model('user', UserSchema)

UserModel.create({
    name: 'oxc',
    age: 20
})


// 监听连接事件和连接失败事件
db.on('open', () => {
    console.log('db connected!')
})

db.on('error', e => {
    console.log(e)
})



