var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogPostSchema = new Schema({
	title: String,
	color: String,
	post_number: String,
	date: String,
	time: String,
	tags: String,
	photo1: Object,
	caption1: String,
	para1: String,
	quote: String,
	para2: String,
});

var blogPost = mongoose.model('blogPost', blogPostSchema);

module.exports = blogPost;