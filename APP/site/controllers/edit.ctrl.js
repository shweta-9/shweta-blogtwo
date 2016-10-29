(function() {
	angular
		.module('blogApp')
		.controller('editCtrl', editCtrl);

	function editCtrl(postData,postSrv, $http){
		var editVm = this;
		editVm.title = "title";
		editVm.update = update;
		editVm.uploadFile = uploadFile;
		// this.color='#f00';


		// editVm.postData = postData;
		console.log(postData)
		editVm.id = postData._id;
		editVm.title = postData.title;
		editVm.color = postData.color;
		editVm.post_number = postData.post_number;
		editVm.date = postData.date;
		editVm.time = postData.time;
		editVm.tags = postData.tags;
		editVm.photo1 = postData.photo1;
		editVm.caption1 = postData.caption1;
		editVm.para1 = postData.para1;
		editVm.quote = postData.quote;
		editVm.para2 = postData.para2;




		function update(postId) {
			var updatedPost = {
				"title": editVm.title,
				"color": editVm.color,
				"post_number" : editVm.post_number,
				"date" : editVm.date,
				"time" : editVm.time,
				"tags" : editVm.tags,
				"photo1" : editVm.photo1,
				"caption1" : editVm.caption1,
				"para1" : editVm.para1,
				"quote" : editVm.quote,
				"para2" : editVm.para2,

			}
			console.log(updatedPost)
			postSrv.edit(updatedPost,postId)
		}


		function uploadFile() {
				var file = editVm.file;
				var formData = new FormData();
				formData.append('file', file);

				$http.post('/upload', formData, {
					transformRequest: angular.identity,
					headers: {'Content-Type': undefined}
				})
				.then(function(res) {
					console.log(res.data.path);
					var pathToImage = res.data.path.slice(3);
					editVm.photo1 = pathToImage;
					console.log('successfully uploaded file');
				})
				.catch(function(err){
					console.log(err);
				})
		//GO TO POST PAGE/ID

		}

	}

})();