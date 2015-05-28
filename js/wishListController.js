angular.module('bookClubApp').controller('WishListCtrl', WishListCtrl);

function WishListCtrl ($scope, wishListFactory) {
 wishListFactory.getList(function (res) {
 		$scope.wishList = res;
 		console.log("WISH LIST!", res);
 });

 
}