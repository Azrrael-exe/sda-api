var colors = ['red', 'green', 'blue', 'pink']

module.exports = {
  randomColor: (req, res, next) => {
    res.payload = {
        color: colors[Math.floor(Math.random()*colors.length)]
    };
    return next();
  },
};