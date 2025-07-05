const express = require('express');
const router = express.Router();
const { getStatusByPetId } = require('../controllers/status.controller');

router.get('/adoption/status/:petId', getStatusByPetId);

module.exports = router;
