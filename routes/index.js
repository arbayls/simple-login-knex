var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dash', function(req, res, next) {
  if(req.cookies.loggedIn === 'true') {
    res.render('dashboard', { title: 'Dashboard' });
  } else {
    res.redirect('/auth');
  }
});

module.exports = router;
