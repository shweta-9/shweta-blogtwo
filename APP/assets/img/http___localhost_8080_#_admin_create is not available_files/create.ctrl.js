(function() {
	angular
		.module('blogApp')
		.controller('createCtrl', createCtrl);

	function createCtrl($http){
		createVm = this;
		createVm.createPost = createPost;
		// journal would eventually come from database
		// createVm.journal = [
		// 	{
		// 		title: "Test Title"
		// 	},
		// 	{
		// 		title: "Second"
		// 	}
		// ];

		
		function createPost(title,color,postnumber,date,time,photo1,caption2,para1,quote,para2,photo2,caption2) {

			var newPost = {
			title: createVm.title,
			color: createVm.color,
			postnumber: createVm.postnumber,
			date: createVm.date,
			time: createVm.time,
			photo1: createVm.photo1,
			caption1: createVm.caption1,
			para1: createVm.para1,
			quote: createVm.quote,
			para2: createVm.para2,
			photo2: createVm.photo2,
			}

			return $http.post('/entry', newPost)
				.then(function(response) {
					console.log(response)
				})


			// return $http.post('/posting', newPost)
			// 	.then(function(response) {
			// 		console.log(response)
			// 	})

		};
		
		// http POST to add newPost to database
		// $http.post(URL END POINT, data)


	}
})();
