var express = require('express');
var router = express.Router();

var request = require('request');
var AUTH_TOKEN = 'a8a51b764460c5713d89a6f757467c5b0f396674'

var prod_options = {
  url: 'https://exview-testcart.herokuapp.com/api/products/',
  headers: {
    'Authorization': 'Token ' + AUTH_TOKEN
  }
};

router.get('/products', function(req, res, next){
	request(prod_options).pipe(res)
});

module.exports = router;