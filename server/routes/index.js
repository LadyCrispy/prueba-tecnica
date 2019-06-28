const express = require('express');
const router  = express.Router();
const phones = require('../phones.json')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/api/phones', (req, res, next)=>{
  res.json(phones)
})

module.exports = router;
