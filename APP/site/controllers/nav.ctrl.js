(function() {
	angular
		.module('blogApp')
		.controller('navCtrl', navCtrl);

	function navCtrl(postSrv,$state){
		var navVm = this;
		navVm.posts = postSrv.getAllPosts();
		console.log(navVm.posts)

		navVm.searchAll = searchAll;

		navVm.posts = postSrv.getAllPosts();
		//navVm.search = postSrv.search;

		function searchAll() {
			console.log("SEARCH")
			console.log(navVm.search);
			postSrv.search = navVm.search;
			$state.go('searchResults');

			$('#myModal').modal('hide');

			//then on searchResultsCtrl
			// ctrl.posts = postSrv.getAllPosts()
			// ctrl.search = postSrv.search

			// on searchResults.html
			//ng-repeat "items in ctrl.post | filter: ctrl.search"

			// for (i=0; i <= words.length; i++){
			// 	if (words[i] == navVm.input)
			// 	{

			// 	} else {

			// 	}
			// }
		}

	}
})();


//ng-repeat "items in ctrl.post | filter: ctrl.search"