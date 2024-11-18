const express = require('express');
const { getPatents, createPatent } = require('../controllers/patentController');
const router = express.Router();

router.route('/')
  .get(getPatents)
  .post(createPatent);

module.exports = router;
