angular.module('app')
.factory('movieFactory', ($http,API_URL) => {

//   let movies = null

//   return {
//     getMovies() {
//       return $http
//         .get(`${OMD_URL}`)
//         .then(resolve => resolve.data)
//         .then(m => movies = m)
//     },
//     addMovies(id) {
//       return $http
//       .post(`${OMD_URL}/${id}`),
//         { completed: todos[id].completed }


//     }
//   }
// })
