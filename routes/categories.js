const 
  router = require('express').Router(),
  db = require('../db');

router.get('/', function(req, res, next){
  res.render('categories', {categories: db.getCategoryNames()});
});

router.post('/', function(req, res){
    console.log(req.body.name);
    createCategory.add(req.body.name);
    res.redirect(`/categories/${req.body.name}/products`)
});

module.exports = router;