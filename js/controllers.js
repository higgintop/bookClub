angular.module('bookClubApp').controller('SearchCtrl', SearchCtrl);


function SearchCtrl ($scope, bookSearchFactory) {
  $scope.loadSearchResults = function (title, author) {
		bookSearchFactory.getSearchResults(title, author)
			.success(function (response){
				$scope.searchResults = response.items;
			})
			.error(function (error){
				console.log("ERROR", error.message);
			});
	}
}