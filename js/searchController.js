angular.module('bookClubApp').controller('SearchCtrl', SearchCtrl);

function SearchCtrl ($scope, bookSearchFactory, $modal) {
  // function - get search results via title and/or author
  $scope.loadSearchResults = function (title, author) {
		bookSearchFactory.getSearchResults(title, author)
			.success(function (response){
				$scope.searchResults = response.items;
			})
	}

	// function - get book details for single book based on id
	$scope.getBookDetails = function (id) {
		bookSearchFactory.getSingleBookResult(id)
			.success(function (response){
				$scope.open(response);
			})
			.error(function (error){
				console.log("ERROR", error.message);
			});		
	}

// function to open modal with book details
 $scope.open = function (singleBookResponse) {
	  var modalInstance = $modal.open({
	      templateUrl: '../views/partials/modal.html',
	      controller: 'ModalController',
      resolve: {
        book: function () {
          return singleBookResponse;
        }
      }
	  });
 }
}





