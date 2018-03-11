var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/creatzone', function(req, res, next) {
  res.render('creatzone', { title: 'Express creat zone' });
});

router.get('/creatcomment', function(req, res, next) {
  res.render('creatcomment', { title: 'Express creat comment' });
});
module.exports = router;
