const User = require('../models/in_memo/user')
const Subscription = require('./../models/in_memo/subscription')

module.exports.getAllUsers = function() {
    return User.list()
}

module.exports.insertNewUser = function(firstname, lastname, age) {
    return User.insert(firstname, lastname, age)
}

module.exports.getUserById = function(userId) {
    return User.getOneById(userId)
}

module.exports.createSubscription = function(userId, url) {
    const user = User.getOneById(userId)
    if(!user) throw Error('没有找到该用户')
    const sub = Subscription.insert(userId, url)
    return sub
}