const express = require('express');
const jsonData = require('./data.json');

const { results } = jsonData;

const router = express.Router();

router.get('/individuals', (req, res) => {
  const { text } = req.query;

  if (text) {
    const found = results.filter((result) =>
      Object.values(result)
        .toString()
        .toLowerCase()
        .includes(text.toLowerCase())
    );

    return res.json({ results: found });
  }
  res.json({ results });
});

module.exports = router;
