var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var products = require('./routes/products');
var categories = require('./routes/categories');
var cart = require('./routes/cart');

var port = 3000;
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', products);
app.use('/api', categories);
app.use('/api', cart);


app.listen(port, function(){
	console.log('Server started on port ' + port)
});



