(function() {
	angular
		.module('blogApp')
		.controller('createCtrl', createCtrl);
		
	function createCtrl($http, $location, $stateParams, postSrv, $scope){
		createVm = this;
		this.createPost = createPost;
		// this.create = postSrv.getPost($stateParams.id)
		this.uploadFile = uploadFile;
		this.color='#f00';
		console.log(this.color)
		// journal would eventually come from database
		// createVm.journal = [
		// 	{
		// 		title: "Test Title"
		// 	},
		// 	{
		// 		title: "Second"
		// 	}
		// ];

		
		function createPost(title,color,postnumber,date,time,photo1,caption2,para1,quote,para2) {

			var newPost = {
			title: createVm.title,
			color: createVm.color,
			post_number: createVm.post_number,
			date: createVm.date,
			time: createVm.time,
			tags: createVm.tags,
			photo1: createVm.photo1,
			caption1: createVm.caption1,
			para1: createVm.para1,
			quote: createVm.quote,
			para2: createVm.para2,
			// photo2: createVm.photo2,
			}

			return $http.post('/entry', newPost)
				.then(function(response) {
					console.log(response.data);
					var id = response.data._id;
				$location.path('/post/' + id);
				})





			// return $http.post('/posting', newPost)
			// 	.then(function(response) {
			// 		console.log(response)
			// 	})

			// http POST to add newPost to database
			// $http.post(URL END POINT, data)

		};


			function uploadFile() {
				var file = createVm.file;
				var formData = new FormData();
				formData.append('file', file);

				$http.post('/upload', formData, {
					transformRequest: angular.identity,
					headers: {'Content-Type': undefined}
				})
				.then(function(res) {
					console.log(res.data);
					var pathToImage = res.data.path.slice(3);
					createVm.photo1 = pathToImage;
					console.log('successfully uploaded file');
				})
				.catch(function(err){
					console.log(err);
			});
		};

	}
})();
