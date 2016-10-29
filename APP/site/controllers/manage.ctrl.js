(function() {
	angular
		.module('blogApp')
		.controller('manageCtrl', manageCtrl);

	function manageCtrl($http, postSrv, $location, $state, posts){
		var manageVm = this		

		// manageVm.postMngr = postMngr;
		manageVm.deletePost = deletePost;
		manageVm.editPost = editPost;

		manageVm.allPosts = postSrv.blogData
		console.log(manageVm.allPosts)

		// function postMngr() {
		// return $http.get('/entry')
		// 	.then(function(res) {
		// 		console.log(res.data);
		// 		manageVm.data = res.data;
		// 	})
		// }

		function editPost(id){
			// localStorage.setItem("postId", id);
			$location.path('/admin/edit/' + id);
		}


		// function delete() {
		// return $http.delete('')
		// }

		function deletePost(postId) {
			console.log(postId);
			$http.delete('/' + postId)
			// .success(function(response){
			// 	refresh();
			// });
			.then(function(res){
				console.log(res)
				$state.reload()
				// $location.path('/post/' + postId);
			});
		};



	}

})();