(function() {
	angular
		.module('blogApp')
		.controller('manageCtrl', manageCtrl);

	function manageCtrl($http){
		var manageVm = this

		manageVm.postMngr = postMngr;

		function postMngr() {
		return $http.get('/entry')
			.then(function(res) {
				console.log(res.data);
				manageVm.data = res.data;
			})
		}

		// function delete() {

		// }
	}

})();