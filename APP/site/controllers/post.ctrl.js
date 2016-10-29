(function() {
	angular
		.module('blogApp')
		.controller('postCtrl', postCtrl);

	function postCtrl(postData, postSrv, $stateParams){
		var postVm = this;
		postVm.post = postData;
		// console.log("caption1", postData.post.caption1)
		console.log(postVm.post);
		//postVm.clickViewAll()
		console.log($stateParams.postId);



		// 1. Use postSrv to get a single post using $stateParams.postId
		// 2. receive that sinlge post object
		// 3. populate the template with the object
	};



})();