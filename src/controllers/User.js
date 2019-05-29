const User = require('../entities/user')

const createUser = (req, res, next) => {
    const { username, password } = req.body  
    User.findOne({
        username: username
    }).then((user) => {
        if(user){
            let err = new Error('User already exist');
            err.status = 400
            err.message = 'User already in database'
            return next(err)
        } else {
            let newUser = User()
            newUser.username = username
            newUser.password = password
            newUser.save()
            res.payload = newUser
        }
        return next();
    }).catch(err => next(err))
} 

const reviewUser = (req, res, next) => {
    const { username } = req.body || req.params
    User.findOne({
        username: username
    }).then((user) => {
        res.payload = user
        return next()
    }).catch(err => next(err)) 
}

module.exports = {
    createUser,
    reviewUser
}