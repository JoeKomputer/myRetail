'use strict';

angular.module('demoApp')
  .factory('productService', function () {
      var info;
      return{
        info:function(product){
          info = product ? product : info;
          return info;
        }
      };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
