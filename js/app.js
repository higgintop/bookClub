var app = angular.module('bookClubApp', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/main.html',
    })
    .when('/search', {
    	templateUrl: '../views/search.html',
    	controller: 'SearchCtrl'
    })
    .when('/readlist', {
    	templateUrl: '../views/readList.html',
    	controller: 'ReadListCtrl'
    })
    .when('/wishlist', {
    	templateUrl: '../views/wishList.html',
    	controller: 'WishListCtrl'
    })
    .otherwise({
    	redirectTo: '/'
    });
});