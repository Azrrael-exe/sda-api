const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const resHandler = require('./utils/ResHandler');
const { Logger } = require('./utils/Logger');
const settings = require('./config/Settings');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost:27017/sda-api");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const api = require('./routes/Api');

app.use(express.static(path.join(__dirname, 'public')));

app.use(settings.BASE_PATH, api);
app.use(resHandler.susscess);
app.use(resHandler.error);

const port = settings.PORT || 3000;

app.listen(port, () => {
  Logger.info(`Server running on port: ${settings.PORT}`);
});

module.exports = app;