// routes/students.js
const express = require('express');
const router = express.Router();
const students = require('../data/students.json');

router.get('/', (req, res) => {
  res.json(students);
});

module.exports = router;
