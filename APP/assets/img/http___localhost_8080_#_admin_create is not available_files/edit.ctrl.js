(function() {
	angular
		.module('blogApp')
		.controller('editCtrl', editCtrl);

	function editCtrl(postData,postSrv){
		var editVm = this;
		editVm.title = "title";
		editVm.update = update;

		// editVm.postData = postData;
		console.log(postData)
		editVm.id = postData._id;
		editVm.title = postData.title;
		editVm.color = postData.color;
		editVm.post_number = postData.post_number;
		editVm.date = postData.date;
		editVm.time = postData.time
		editVm.photo1 = postData.photo1
		editVm.caption1 = postData.caption1
		editVm.para1 = postData.para1
		editVm.quote = postData.quote
		editVm.para2 = postData.para2
		editVm.photo2 = postData.photo2



		function update(postId) {
			var updatedPost = {
				"title": editVm.title,
				"color": editVm.color,
				"post_number" : editVm.post_number,
				"date" : editVm.date,
				"time" : editVm.time,
				"photo1" : editVm.photo1,
				"caption1" : editVm.caption1,
				"para1" : editVm.para1,
				"quote" : editVm.quote,
				"para2" : editVm.para2,
				"photo2" : editVm.photo2
			}
			console.log(updatedPost)
			postSrv.edit(updatedPost,postId)

			function Redirect() {
				window.location="/post" + postid;
			}
		}

		//GO TO POST PAGE/ID

		// }

	}

})();