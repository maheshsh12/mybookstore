'strict';
app.service('BookService', function ($rootScope,$http,GOOGLE_API_KEY, $q, $window) {
    var config={
		 	headers: {
     		'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
    };
    return {
    	getBooks: function(query){
			query = query?query:'angularjs';
			return $http.get('https://www.googleapis.com/books/v1/volumes?q='+query+'&maxResults=10&projection=full&key='+GOOGLE_API_KEY,config);
		}
	};
});