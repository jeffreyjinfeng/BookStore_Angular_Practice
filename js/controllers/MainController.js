app.controller('MainController',['$scope', function($scope){
	$scope.title = 'Books that loved by Jinfeng';
  $scope.promo = 'Buy it';
	$scope.products = [
    {
    	name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpg',
      likes: 0,
      dislikes: 0
    },
    {
    	name: 'Program or be Programmed',
      price: 8,
      pubdate:new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
    },
    {
    	name: 'NASB Bible',
    	price: 10,
    	pubdate:new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
    },
    {
    	name: 'Introduction to Algorithms',
    	price: 10,
    	pubdate:new Date('2013', '09', '01'),
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
    }
  ];
  $scope.plusOne = function(index) {
  	$scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
  	$scope.products[index].dislikes += 1;
  }
}]);
