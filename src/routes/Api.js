const express = require('express');
const { healthCheck } = require('../controllers/HealthCheck');
const { createUser, reviewUser } = require('../controllers/User')

const router = express.Router();

router.get('/health-check', healthCheck);
router.post('/user', createUser)
router.get('/user', reviewUser)

module.exports = router;
