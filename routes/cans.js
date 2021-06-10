const express = require('express');
const router = express.Router();
const Can = require('../models/can');

router.get('/cans', (request, response) => {
  Can.query()
    .then(cans => response.json(cans));
});

router.post('/cans', (request, response) => {
  console.log(request.body);
  // Can.query()
  //   .insert(request.body)
  //   .then(newCan => response.json(newCan));
})

router.delete('/cans/:id', (request, response) => {
  console.log('request', request);
});

module.exports = router;