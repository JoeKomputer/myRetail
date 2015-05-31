'use strict';

angular.module('demoApp')
  .controller('ProductsCtrl', function ($scope, $state, productService, $http) {
    $scope.product = productService.info();
      $scope.backToList = function(){
        $state.go("main");
      };
      $scope.restock = function(){
        $http.put('/api/products/'+$scope.product._id, $scope.product).success(function(products) {
          console.log(products);
        });

      };
      console.log($scope.product);
  });
