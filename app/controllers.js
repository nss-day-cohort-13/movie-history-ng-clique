'use strict';


app.controller('movieCtrl', function ($scope, $http) {
  $scope.getMovies = function () {
    $http.get('http://www.omdbapi.com/?t=' + $scope.movies + "&plot=full") // concatenates user input with API url
      .then(function (resp) { //waits for response from API call
        console.log("resp",resp);
        $scope.movies = resp.data;//sets movies div equal to response.data
    });
  };

  $scope.saveMovie = function () {
    $http.post('https://group-movie-history.firebaseio.com/favorites.json', {
      title: $scope.movies.Title,
      year: $scope.movies.Year,
      rating: $scope.rateData.rateSelect,
      watched: $scope.watchData.watched

    }).then(function() {
      window.location.reload()
    });
  }

  $scope.delMovie = function () {}

$scope.rateData = {
  rateSelect: null,
  ratings: [
      {id: '1', name: 'One Star'},
      {id: '2', name: 'Two Stars'},
      {id: '3', name: 'Three Stars'},
      {id: '4', name: 'Four Stars'},
      {id: '5', name: 'Five Stars'}
    ],
};

$scope.watchData = {
  watched: true

};

});

app.controller("FavCtrl", ($scope, $http) => {
    $http.get('https://group-movie-history.firebaseio.com/favorites.json')
        .then((response) => {
            console.log("response", response);
        $scope.movieArray = [];
        $scope.favMovies = response.data;
        for ( let movie in $scope.favMovies) {
       $scope.movieArray.push($scope.favMovies[movie]);
       console.log($scope.movieArray)
     }
        });
});


// app.controller("delCtrl", ($scope, $http) => {
//     $http.post('https://group-movie-history.firebaseio.com/favorites.json')
//         .then((response) => {
//             console.log("response", response);
//         $scope.favMovies = response.data.favorites;
//         });
// });

//         app.controller("delCtrl", ($scope, $http) => {
//     $http.delete('https://group-movie-history.firebaseio.com/favorites.json')
//         .then((response) => {
//             console.log("response", response);
//         $scope.favMovies = response.data;
//         });
// });
