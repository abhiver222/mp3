/* Sample Controller */
app.controller('galleryController', ['$scope', '$http', function($scope, $http) {

    $scope.genres = [ 'Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Musical', 
                    'Mystery', 'Romance', 'Sci-Fi', 'Thriller', 'Western' ];

    $scope.filters = { genre: '' };

    $http.get('data/imdb250.json').success(function(data){

    	$scope.movies = data;
    	console.log(data);

    }).error(function(err){
    	console.log(err);
    })


}]);

// LIST view for searching
app.controller('listController', ['$scope', '$http', function($scope, $http) {

	$scope.myRank = $routeParams.rank;


    //append things onto scope object in order for html to recognize it
    $scope.change = function () {   //add a name to list
        $scope.classdata.names.push($scope.inputValue);
        $scope.inputValue = "";
    }

    $http.get('data/imdb250.json').success(function(data){

        $scope.movies = data;
        console.log(data);

    }).error(function(err){
        console.log(err);
    })

}]);

// DETAILS view for 1 movie at a time
app.controller('detailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    $http.get('data/imdb250.json').success(function(data){
        $scope.movie = data[$routeParams.rank - 1];
        nextRank = +$routeParams.rank+1;
        prevRank = +$routeParams.rank-1;
        if(nextRank > 250)
            nextRank = 1;
        if(prevRank < 1)
            prevRank = 250;
        $scope.nextrank = nextRank;
        $scope.prevrank = prevRank;
        console.log(data);
    }).error(function(err){
        console.log(err);
    })

}]);