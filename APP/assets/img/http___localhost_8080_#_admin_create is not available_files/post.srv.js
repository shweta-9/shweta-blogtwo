(function(){
	angular
		.module('blogApp')
		.service('postSrv', postSrv)

	function postSrv($http){
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

		function edit(updatedPost, postId) {
			return $http.put('edit/'+postId, updatedPost)
			.then(function(res){
				console.log(res.config.data)
			})
		}


	}

})();