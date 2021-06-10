const express = require('express');
const router = express.Router();
const { Raccoon } = require('../models/raccoon');

router.get('/raccoons', (request, response) => {
  // database('raccoons')
  //   .then(raccoons => response.json(raccoons));

  Raccoon.query()
    .withGraphFetched('cans')
    .then(raccoons => response.json(raccoons));
});

module.exports = { raccoonsRouter: router };