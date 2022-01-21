var express = require('express');
var router = express.Router();


router.get('/dashboard', function (req, res) {
  res.send('API dashboard!');
});



module.exports = router;
