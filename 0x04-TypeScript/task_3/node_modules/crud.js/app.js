var bodyParser      = require('body-parser');
var express         = require('express');
var cors            = require('cors');

var MongoClient = require('mongodb').MongoClient;

var crud = require(__dirname + '/index');

var port = 5000;
var app = module.exports = express();
var url = 'mongodb://localhost:27017/test';

app.use(cors());
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({limit: '1mb', extended: false}));

MongoClient.connect(url, function(err, client) {
	if (err) {
		console.log(err);
	} else {
		console.log('successful connection on mongoDB ', url);
		crud.init(client);
	}
});

app.all('/crud/:collection?', crud.crud);

app.listen(port, function() {
	console.log('Server on http://localhost:' + port);
});