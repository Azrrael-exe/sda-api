const { Arduino } = require('../services/board')

module.exports = {
    arduino: (req, res, next) => {
        console.log(req.body)
        res.payload = req.body
        Arduino.pinMode(13 ,  Arduino.MODES.OUTPUT)
        Arduino.digitalWrite(req.body.pin , req.body.status);
        return next();
    }
}