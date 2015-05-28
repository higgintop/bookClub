angular.module('bookClubApp')
  .factory('wishListFactory', wishListFactory);


function wishListFactory ($http) {
	var BASE_URL = 'https://bookz.firebaseio.com'
	var wishList = {};

  wishList.addBook = function (data, id) {
  	console.log('in wish list factory adding a book', id);
  	// add to firebase
  	$http.post(BASE_URL + '/wishList.json', data)
  	      .success(function (res) {
  	      	//cb(res);
  	      });
  }

  wishList.getList = function (cb) {
  	$http.get(BASE_URL + '/wishList.json')
        .success(function (data) {
        	console.log('our wish list returns ...', data);
          cb(data);
        });
  }

	return wishList;
}