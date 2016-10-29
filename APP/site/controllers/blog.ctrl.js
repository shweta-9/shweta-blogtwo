(function() {
	angular
		.module('blogApp')
		.controller('blogCtrl', blogCtrl);

	function blogCtrl($http, $location, postSrv, posts){
		var blogVm = this
		console.log(posts)
		blogVm.getsAll = getsAll;
		blogVm.data = posts;
		blogVm.goPost = goPost;

		// blogVm.post = postData;




		function getsAll() {
			return $http.get('/entry')
				.then(function(res) {
					console.log(res.data);
					blogVm.data = res.data;
				})

		}

		function goPost(id){
			// localStorage.setItem("postId", id);
			$location.path('/post/' + id);
		}

			

	}

})();