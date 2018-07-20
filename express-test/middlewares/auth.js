module.exports = (req, res, next) => {
    console.log(req.query)
    if(req.query.username === 'oxc') {
        next()
    } else {
        res.end('please go away')
    }
}
