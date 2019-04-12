const express = require('express');
const { healthCheck } = require('../controllers/HealthCheck');
const { randomColor } = require('../controllers/RandomColor');
const { arduino } = require('../controllers/Arduino');

const router = express.Router();

router.get('/health-check', healthCheck);
router.get('/color', randomColor);
router.post('/arduino', arduino);

module.exports = router;
