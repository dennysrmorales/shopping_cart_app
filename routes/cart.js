var express = require('express');
var router = express.Router();

var request = require('request');
var AUTH_TOKEN = 'a8a51b764460c5713d89a6f757467c5b0f396674'

var options = {
  url: 'https://exview-testcart.herokuapp.com/api/cart/',
  headers: {'Authorization': 'Token ' + AUTH_TOKEN}
};

router.get('/cart', function(req, res, next){
	request(options).pipe(res)
});

var post_options = {
	url: 'https://exview-testcart.herokuapp.com/api/cart/',
	body: '',
	method: "POST",
	headers: {'Authorization': 'Token ' + AUTH_TOKEN,
			  'Content-Type': 'application/json'
			 }
}

router.post('/cart', function(req, res, next){
	post_options.body = JSON.stringify(req.body)
	request(post_options).pipe(res)
});

module.exports = router;

