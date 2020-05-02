const express = require('express');

const {ReportController} = require('../app/controllers')

const router = express.Router();

router.get('/results', ReportController.getReport);

module.exports = router;