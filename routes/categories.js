const 
  router = require('express').Router(),
  db = require('../db');

router.get('/', function(req, res, next){
  res.render('categories', {categories: db.getCategoryNames()});
});

module.exports = router;