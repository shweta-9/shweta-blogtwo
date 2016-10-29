(function() {
	angular
		.module('blogApp', ['ui.router']);

	angular
		.module('blogApp')
		.config(function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise("/");

			$stateProvider
				.state('blog', {
					url: "/",
					templateUrl: "site/partials/blog.html",
					controller: "blogCtrl as ctrl",
					resolve: {
						posts: function(postSrv){
							return postSrv.getAllPosts()
						}
						,
						// postData: function($http, postSrv, $stateParams){
						// 	var id = $stateParams.postId;
						// 	console.log(id);
						// 	return $http.get('/'+ id)
						// 		.then(function(res){
						// 			return res.data;
						// 		});
						// }
					}
				})

				.state('about', {
					url: "/about",
					templateUrl: "site/partials/about.html",
					controller: "aboutCtrl as ctrl"
				})

				.state('post', {
					url: "/post/:postId",
					templateUrl: "site/partials/post.html",
					controller: "postCtrl as ctrl",
					resolve: {
						postData: function($http, postSrv, $stateParams){
							// var id = localStorage.getItem("postId");
							var id = $stateParams.postId;
							console.log(id);
							return $http.get('/'+ id)
								.then(function(res){
									// console.log(res.data)
									return res.data;
								});
						}
					}
				})

				.state('admin', {
					url: "/admin",
					templateUrl: "site/partials/admin.html",
					controller: "adminCtrl as ctrl"
				})

				.state("admin.manage", {
					url: "/manage",
					templateUrl: "site/partials/manage.html",
					controller: "manageCtrl as ctrl",
					resolve: {
						posts: function(postSrv){
							return postSrv.getAllPosts()
						}
					}
				})				

				.state("admin.create", {
					url: "/create",
					templateUrl: "site/partials/create.html",
					controller: "createCtrl as ctrl"
				})

				.state("admin.edit", {
					url: "/edit/:postId",
					templateUrl: "site/partials/edit.html",
					controller: "editCtrl as ctrl",
					resolve: {
						postData: function($http, postSrv, $stateParams){
							var id = localStorage.getItem("postId");
							console.log(id);
							return $http.get('/'+ $stateParams.postId)
								.then(function(res){
									// console.log(res.data)
									return res.data;
								});
						}
					}
				})

				.state('searchResults', {
					url: "/searchResults",
					templateUrl: "site/partials/searchResults.html",
					controller: "searchResultsCtrl as ctrl",
					resolve: {
						postData: function(postSrv){
							return postSrv.getAllPosts()
						}
					}
				});
		})
		.run(function($rootScope, $state, $stateParams){
			$rootScope.$on('$stateChangeSuccess', function() {
			   document.body.scrollTop = document.documentElement.scrollTop = 0;
			});
		})
})();