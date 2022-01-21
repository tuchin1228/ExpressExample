var express = require('express');
var router = express.Router();
const db = require('../../db')


router.get('/gettest', function (req, res) {
  res.send('API Get!');
});

router.post('/posttest', function (req, res) {
  let query = `SELECT * FROM users;
               SELECT * FROM article`;
  try {
    db.query(query, (err, result, fields) => {
      console.log(result);
      let users = result[0];
      let article = result[1];
      res.send({
        'users': users,
        'article': article
      })
    })
  }
  catch (err) {
    console.log(err);
  }
});


router.post('/createUser', function (req, res) {

  let Userrecords = [
    ['Jack', 16, 'aaa', '111'],
    ['Priya', 17, 'bbb', '222'],
    ['Amy', 15, 'ccc', '333']
  ];
  let Articlerecords = [
    ['標題2', '內容2'],
    ['標題3', '內容3'],
  ];

  let query = `INSERT INTO article (title,content) VALUES ?;
               INSERT INTO users (name,age,account,password) VALUES ?;`;
  try {
    db.query(query, [Articlerecords, Userrecords], (err, result, fields) => {
      res.send('Create Success');
    })
  }
  catch (err) {
    console.log(err);
  }
})

module.exports = router;
