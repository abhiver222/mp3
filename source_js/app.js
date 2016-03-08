var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {

	$routeProvider
		.when('/gallery', {	//when url has gallery in it, we want to load the partial w/ gallery and use democontroller
			templateUrl : 'partials/gallery.html',
			controller: 'galleryController'
		})
		.when('/list/:rank', {	// angular has ways to search and sort, so dont write custom code
			templateUrl : 'partials/details.html',
			controller: 'detailsController'
		})
		.when('/list/', {	// angular has ways to search and sort, so dont write custom code
			templateUrl : 'partials/list.html',
			controller: 'listController'
		})
		.otherwise({
			redirectTo: '/list'
		});

})
