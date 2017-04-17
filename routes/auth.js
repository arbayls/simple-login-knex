var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Auth Route' });
});

router.post('/login', function(req, res, next) {

  knex('users').select()
               .where('username', req.body.username)
               .andWhere('password', req.body.password)
               .then(function(user) {
                 if(user[0].id) {
                   res.cookie('loggedIn', 'true');
                   res.cookie('loginDateTime', moment(new Date()).format())
                   res.redirect('/dash');
                 }
               })
               .catch(function(err) {
                 res.redirect('/auth')
               });

});

router.post('/logout', function(req, res, next) {
  res.clearCookie('loggedIn');
  res.redirect('/auth');
});

module.exports = router;
