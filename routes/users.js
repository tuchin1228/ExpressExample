var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/setName', function (req, res, next) {
  console.log(req.body.name);
  // console.log(req.name);
  res.render('index', { title: 'users', name: req.body.name });
});

module.exports = router;
