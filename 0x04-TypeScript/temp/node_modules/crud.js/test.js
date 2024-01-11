var MongoClient = require('mongodb').MongoClient;

var crud = require(__dirname + '/lib/crud');
var url = 'mongodb://localhost:27017';

var post = function () {
	var req = {
		params: {
			collection: 'test'
		},
		body: {
			'title': 'postTest'
		},
		method: 'POST'
	}
	var res = {
		send: function () {
			console.log('res.send', arguments);
		}
	};
	return ({
		req: req,
		res: res
	});
}

var get = function () {
	var req = {
		params: {
			collection: 'test'
		},
		query: {
		},
		method: 'GET'
	}
	var res = {
		send: function () {
			console.log('res.send', arguments);
		}
	};
	return ({
		req: req,
		res: res
	});
}

MongoClient.connect(url, function(err, client) {
	if (err) {
		console.log(err);
	} else {
		console.log('successful connection on mongoDB ', url);
		crud.init(client);
		var postQuery = post();
		var getQuery = get();
		crud.crud(postQuery.req, postQuery.res);
		setTimeout(function () {
			crud.crud(getQuery.req, getQuery.res);
			setTimeout(function () {
				client.collection('test').remove({title: 'postTest'});
				console.log('post deleted');
			}, 500);
		}, 1000);
	}
}.bind(this));