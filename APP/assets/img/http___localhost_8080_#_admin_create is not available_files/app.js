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
					controller: "blogCtrl as ctrl"
				})

				.state('about', {
					url: "/about",
					templateUrl: "site/partials/about.html",
					controller: "aboutCtrl as ctrl"
				})

				.state('post', {
					url: "/post",
					templateUrl: "site/partials/post.html",
					controller: "postCtrl as ctrl",
					resolve: {
						postData: function($http, postSrv){
							var id = localStorage.getItem("postId");
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
					controller: "manageCtrl as ctrl"
				})				

				.state("admin.create", {
					url: "/create",
					templateUrl: "site/partials/create.html",
					controller: "createCtrl as ctrl"
				})

				.state("admin.edit", {
					url: "/edit",
					templateUrl: "site/partials/edit.html",
					controller: "editCtrl as ctrl",
					resolve: {
						postData: function($http, postSrv){
							var id = localStorage.getItem("postId");
							console.log(id);
							return $http.get('/'+ id)
								.then(function(res){
									// console.log(res.data)
									return res.data;
								});
						}
					}
				});
		});
})();