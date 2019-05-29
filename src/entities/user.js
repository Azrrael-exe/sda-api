const { Schema, model } = require('mongoose');

const userSchema = Schema({
    username : {type: String, require : true},
    password : {type: String, require: true}
});

module.exports = model('User', userSchema);