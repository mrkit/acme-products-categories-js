const
  express = require('express'),
  app = express(),
  path = require('path'),
  db = require('./db'),
  nunjucks = require('nunjucks'),
  routes = require('./routes/categories');

nunjucks.configure('view', {noCache: true});
nunjucks.render('index.html', db, function(err, output){
  if(err) return console.log(err);
  console.log(output);
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use(require('body-parser').urlencoded({extended:false}));
app.use(require('method-override')('_method'));

app.get('/', function(req, res, next){
  res.render('index', { categories: db.getCategoryNames() })
});

app.use('/categories', routes);

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(`listening on port ${port}`);
});