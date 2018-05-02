var express = require('express');
var router = express.Router();

var request = require('request');
var AUTH_TOKEN = 'a8a51b764460c5713d89a6f757467c5b0f396674'

var cat_options = {
  url: 'https://exview-testcart.herokuapp.com/api/categories/',
  headers: {
    'Authorization': 'Token ' + AUTH_TOKEN
  }
};

router.get('/categories', function(req, res, next){
	request(cat_options).pipe(res)
});

module.exports = router;