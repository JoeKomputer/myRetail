'use strict';

angular.module('demoApp')
  .controller('MainCtrl', function ($scope, $http, socket, $state, productService) {
    $scope.products = [];

    $http.get('/api/products').success(function(products) {
      $scope.products = products;
      socket.syncUpdates('products', $scope.products);
    });
    $scope.goToProduct = function(product){
      productService.info(product);
      $state.go('products');
    };
    //$scope.addThing = function() {
    //  if($scope.newThing === '') {
    //    return;
    //  }
    //  $http.post('/api/things', { name: $scope.newThing });
    //  $scope.newThing = '';
    //};

    //$scope.deleteThing = function(thing) {
    //  $http.delete('/api/things/' + thing._id);
    //};

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('products');
    });
  });
