const mongoose = require('mongoose')

mongoose.Promise = Promise

const uri = `mongodb://localhost:27017/test`

const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId
// Object = mongoose.Types.ObjectId

// 链接数据库
const connection = mongoose.connect(uri, {useNewUrlParser: true})
const db = mongoose.connection

// const UserSchema = new Schema({
//     name: {type: String, required: true, unique: true},
//     type: {type: Number, max: 188, min: 0}
// })

// const userModel = mongoose.model('user', UserSchema)

// (async () => {


// })()
//     .then(r => {

//     })
//     .catch(e => {

//     })

db.on('open', () => {
    console.log('db connected!')
})

db.on('error', e => {
    console.log(e)
})

