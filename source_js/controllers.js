/* Sample Controller */
app.controller('galleryController', ['$scope', '$http', function($scope, $http) {

    $scope.genres = [ 'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'History', 'Horror', 'Music', 'Musical', 
                    'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'War', 'Western' ];

    $scope.filters = { genre: '' };

    $http.get('./data/imdb250.json').success(function(data){

    	$scope.movies = data;
    	console.log(data);

    }).error(function(err){
    	console.log(err);
    })


}]);

// LIST view for searching
app.controller('listController', ['$scope', '$http', function($scope, $http) {

    $scope.inputText = 'Enter a search term';
    $scope.options = [{ name: 'Title', id: 'title' }, { name: 'Rank', id: 'rank' }];
    $scope.direction = [{ name: 'Ascending', id: false }, { name: 'Descending', id: true }];    //reverse?
    $scope.selectedOption = $scope.options[0];
    $scope.selectedDirection = $scope.direction[0];


    $http.get('./data/imdb250.json').success(function(data){

        $scope.movies = data;

    }).error(function(err){
        console.log(err);
    })

}]);

// DETAILS view for 1 movie at a time
app.controller('detailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    $http.get('./data/imdb250.json').success(function(data){
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