var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlutils = require('url');
var mongoskin = require('mongoskin');
var MongoClient = require('mongodb').MongoClient;

var workersRouter = require('./routes/worker');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));



MongoClient.connect('mongodb+srv://dristk:12345@cluster0-mpxrf.mongodb.net', (err, client) => {
	if (err) return console.log(err)
	app.use((req, res, next) => {
		res.append('Access-Control-Allow-Origin', ['*']);
		res.header("Access-Control-Allow-Headers", "*")
		res.header("Access-Control-Allow-Methods", "*")
		next();
	});
	app.use(function (req, res, next) {
		req.db = {};
		req.db.workers = client.db('test').collection('workers');
		next();
	});
	app.use('/workers', workersRouter);
	app.get('/', (req, res) =>{
		res.sendFile(__dirname + "index.html");
	})

	app.listen(3000, () => {
		console.log('listening on 3000')
	})

})

