const express = require('express');
const jsonData = require('./data.json');

const { results } = jsonData;

const router = express.Router();

router.get('/individuals', (req, res) => {
  res.json({ results });
});

module.exports = router;
