var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data/db');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("connected to db at /data/db/")
});

var blogPost = require('./models/blogpost.js');

var multer = require('multer');

//MULTER file uploading
var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, '../APP/uploads');
	},
	filename: function(req, file, callback) {
		var originalName = file.originalname;
		var fileExtension = originalName.split('.').slice(-1);
		originalName = originalName.split('.').slice(0,-1).join('.');

		callback(null, originalName + '-' + Date.now() + '.' + fileExtension);
	}
})

var upload = multer({storage: storage}).any();
// var upload = multer({storage: storage}).single();

// var blog = require('./routes/blog.js');
// var about = require('./routes/about.js');
// var post = require('./routes/post.js');
// var admin = require('./routes/admin.js');
// var create = require('./routes/create.js');
// var edit = require('./routes/edit.js');
// var jsonParser = bodyParser.json();

// app.get('/', function(req, res) {
// 	res.send('Express is running!');
// });


app.use(express.static(__dirname + './../APP/'));

app.use(bodyParser.json())



//CREATE + add ENTRY
app.post('/entry', function(req, res) {
	// console.log(req.body)
	// res.send('post added')

	var newblogPost = blogPost(
		{
			title: req.body.title,
			color: req.body.color,
			post_number: req.body.post_number,
			date: req.body.date,
			time: req.body.time,
			tags: req.body.tags,
			photo1: req.body.photo1,
			caption1: req.body.caption1,
			para1: req.body.para1,
			quote: req.body.quote,
			para2: req.body.para2,
		});
	newblogPost.save(function(err, blogPost) {
		if (err) {
			console.log(err)
		} else {
			console.log('Post created!');
			res.json(blogPost);
		}
	})
});

//RETRIEVE ENTRY
app.get('/entry', function(req, res) {
	blogPost.find({}, function(err, objectsArray) {
		if (err) {
			res.status(400)
				.json({err:err});
		} else {
			res.json(objectsArray);
		}
	});
	// res.send('retrieved entry')
});

//RETRIEVE SPECIFIC ID ENTRY 
app.get('/:objectId', function(req,res){
	blogPost.findOne({"_id":req.params.objectId}, function(err,object) {
		if(err) {
			console.log(err);
			res.status(400)
			.json({err:err})
		} else {
			res.json(object)
		}
	})
});

//UPDATE ENTRY
app.put('/edit/:objectId', function(req, res) {
	// res.send('updated entry')
	var __object = req.body;
	var update = {
		title:__object.title,
		color:__object.color,
		post_number:__object.post_number,
		date: __object.date,
		time: __object.time,
		tags: __object.tags,
		photo1: __object.photo1,
		caption1: __object.caption1,
		para1: __object.para1,
		quote: __object.quote,
		para2: __object.para2,
	}
	console.log(__object.post_number)
	var query = {"_id": req.params.objectId}
	blogPost.update(query,update,{},function(err,object){
		if(err){
			console.log(err);
			res.status(400)
			.json({err:err})
		} else {
			res.json(object);
		}
	});
});

//DELETE ENTRY
app.delete('/:objectId',  function(req,res) {
	blogPost.findOne({"_id":req.params.objectId}, function(err,object){
		object.remove(function(err){
			if(err) {
				console.log(err);
				res.status(400)
					.json({err:err})
			} else {
				res.json({deleted:true})
			}
		})
	});
});




// app.post('/upload', function(req, res) {
// 	upload(req, res, function(err) {
// 		console.log(req.file[0].path);
// 		if (err) {
// 			res.send(err);
// 			console.log(err);
// 		}
// 		res.json(req.files[0]);
// 	});
// });


app.post('/upload', function(req, res) {
	upload(req, res, function(err) {
		console.log(req.files[0]);
		if (err) {
			res.send(err);
			console.log(err);
		} else {
			res.json(req.files);
		}
	});
});

//ALWAYS GOES AT END OF DOCUMENT
app.listen(80, function() {
	console.log('server started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});
