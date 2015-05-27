angular.module('bookClubApp')
  .factory('bookSearchFactory', bookSearchFactory);

function bookSearchFactory($http) {
  var bsf = {}

  bsf.getSearchResults = function(title, author) {
  	console.log('title =', title);
  	console.log('author=', author);
  	if ((typeof title === 'undefined' || title === "")  && (typeof author !== 'undefined' && author !== "")){
  		return $http.get('https://www.googleapis.com/books/v1/volumes?q=inauthor:' + author);
  	}
  	else if ((typeof title !== 'undefined' && title !== "") && (typeof author === 'undefined' || author === "")){
  		return $http.get('https://www.googleapis.com/books/v1/volumes?q=intitle:' + title);
  	}
  	else if ((typeof title !== 'undefined' && title !== "") && (typeof author !== 'undefined' && author !== "")){
  		return $http.get('https://www.googleapis.com/books/v1/volumes?q=intitle:' + title + '+inauthor:' + author);
  	}
  	else {
  		return $http.get('https://www.googleapis.com/books/v1/volumes?q=""');
  	}
  };

  return bsf;
}