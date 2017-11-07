app.directive('bookList', function($rootScope) {
  return {
    restrict: 'E',
    replace: false,
    transclude: true,
    controller:'BookListController',
    templateUrl:'components/templates/directive-views/booklist-view.html',
    link:function($scope, el, attrs,ngModel) {
      
    }
  };
});

app.controller('BookListController', function ($rootScope,$scope,$state,$location,SITEURL,BookService,$sessionStorage,$filter) {
  $scope.books = [];

  BookService.getBooks().then(function(response){
    $scope.books = response.data.items;
  });

  $scope.addToWishlist = function(book){
    var wishlistItems = $sessionStorage.mybooks || [];
    wishlistItems.push(book);
    $sessionStorage.mybooks = wishlistItems;
    $rootScope.$broadcast('added-to-wishlist');
    console.log( $sessionStorage);
  }
  $scope.filterBookList = function(query){
    if(query.length >=3){
      BookService.getBooks(query).then(function(response){
        $scope.books = response.data.items;
      });
    }
  }
  $scope.isAdded = function(book){
    var wishlistItems = $sessionStorage.mybooks;
    var item = $filter('filter')(wishlistItems, {id: book.id})[0];
    return item;
  }
});
