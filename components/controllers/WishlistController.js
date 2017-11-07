app.controller('WishlistController', function ($rootScope,$scope,$state,$location,SITEURL,BookService,$sessionStorage) {
	$rootScope.siteTitle = "My Google Book Store";
	$rootScope.pageTitle = "My Google Book Store";

	$scope.mybooks = $sessionStorage.mybooks;
	$scope.$on('added-to-wishlist', function() {
		$scope.mybooks = $sessionStorage.mybooks;
	});
	
});
