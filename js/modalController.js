angular.module('bookClubApp').controller('ModalController', function($scope, $modalInstance, book, wishListFactory) {
  
 $scope.book = book;
 $scope.close = function() {
 	$modalInstance.close();
 };

 $scope.addToWishList = function() {
 		console.log('in modal controller adding book to wish list');
 		var data = {
 			title: book.volumeInfo.title,
 			author: book.volumeInfo.authors[0],
 			id: book.id
 		}
 		wishListFactory.addBook(data);
 }

});