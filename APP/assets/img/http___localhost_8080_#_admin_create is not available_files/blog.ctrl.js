(function() {
	angular
		.module('blogApp')
		.controller('blogCtrl', blogCtrl);

	function blogCtrl($http, $location, postSrv){
		var blogVm = this
		
		blogVm.getsAll = getsAll;
		blogVm.data = [];
		blogVm.goPost = goPost;

		function getsAll() {
			return $http.get('/entry')
				.then(function(res) {
					console.log(res.data);
					blogVm.data = res.data;
				})

		}

		function goPost(id){
			localStorage.setItem("postId", id);
			$location.path('/post');
		}

			

	}

})();