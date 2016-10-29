(function() {
	angular
		.module('blogApp')
		.controller('postCtrl', postCtrl);

	function postCtrl(postData, postSrv){
		var postVm = this;
		postVm.post = postData;
		console.log(postVm.post);
		//postVm.clickViewAll()

	}
})();