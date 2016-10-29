(function() {
	angular
		.module('blogApp')
		.controller('searchResultsCtrl', searchResultsCtrl);

	function searchResultsCtrl($location,postSrv,postData){
		var searchVm = this;
		// searchVm.posts = postSrv.getAllPosts();
		// console.log(searchVm.posts)
		console.log("search controller loaded")
		// searchVm.search = searchVm.search;
		console.log(postData)
		searchVm.posts = postData
		// searchVm.posts = postSrv.getAllPosts();
		searchVm.search = postSrv.search;
		console.log(searchVm.search)
		searchVm.goPost = goPost;


		function goPost(id){
			// localStorage.setItem("postId", id);
			$location.path('/post/' + id);
		}
	}
	
})();
