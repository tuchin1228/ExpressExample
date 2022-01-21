var express = require('express');
var router = express.Router();


router.use(function timeLog(req, res, next) {
  console.log('過Middleware');
  next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET test page. */
router.get('/test', function (req, res, next) {
  res.render('index', { title: 'Test' });
});



module.exports = router;
