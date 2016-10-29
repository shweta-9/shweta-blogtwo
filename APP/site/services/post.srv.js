(function(){
	angular
		.module('blogApp')
		.service('postSrv', postSrv)

	function postSrv($http,$location){
		var self = this;
		
		//variables
		// self.postId = "";

		// //function bindings
		// self.saveId = saveId;

		// //function declarations
		// function saveId(id){
		// 	if (localStorage.postId){
		// 		self.postId = JSON.parse(localStorage.postId);
		// 		console.log(self.postId)
		// 	} else {
		// 		self.postId = id;
		// 		localStorage.setItem("postId",id);
		// 	}
		// }

		self.edit = edit;
		self.editedPost;
		self.getPost = getPost;
		self.getAllPosts = getAllPosts;
		// self.uploadFile = uploadFile;
		self.search;
		console.log(self.search)

		function edit(updatedPost, postId) {
			return $http.put('edit/'+postId, updatedPost)
			.then(function(res){
				console.log(res.config.data)
				$location.path('/post/' + postId);
			})
		}

		function getPost(postId) {
			return $http.get('/' + postId)
			// 1. use postId to send a GET request to 
			// 2. your API endpoint for single posts
		}

		function getAllPosts(){
			console.log("Get all posts")
			return $http.get('/entry')
			.then(function(res){
				console.log(res.data)
				self.blogData = res.data
				return res.data;
			})
		}




	}

})();