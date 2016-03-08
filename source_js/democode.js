//demo app.js:

var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {

	$routeProvider
		.when('/gallery', {	//when url has gallery in it, we want to load the partial w/ gallery and use democontroller
			templateUrl : 'partials/gallery.html',
			controller: 'demoController'
		})
		.when('/list/:rank', {	// angular has ways to search and sort, so dont write custom code
			templateUrl : 'partials/list.html',
			controller: 'demoTwoController'
		})

		.otherwise({
			redirectTo: '/gallery'
		});

})

_______________

//demo controllers.js:

/* Sample Controller */
app.controller('demoController', ['$scope', '$http', function($scope, $http) {

	//append things onto scope object in order for html to recognize it
	$scope.myName = "Maggie Smith";

	$scope.classdata = {
		"title": "CS498RK",
		"names": ["abhishek", "annie", "biplab"]
	};

    $scope.change = function () {
        $scope.classdata.names.push($scope.inputValue);
        $scope.inputValue = "";
    }

    $http.get('data/imdb250.json').success(function(data){
    	$scope.oldStaff = data;
    	console.log(data);
    }).error(function(err){
    	console.log(err);
    })

}]);

//scope defines variables
//http lets you get object
//routeparams lets you pull which thing you want from the data
app.controller('demoTwoController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

	$scope.myRank = $routeParams.rank;

}]);