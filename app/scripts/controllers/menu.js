'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', ['foodFinder', function (menu) {
    var vm = this;

    menu.getMenu().then(function(data) {
      vm.items = data;
    });

    this.increment = function(item) {
      // item.rating += 0.1
      item.rating = ((item.rating * 10) + 1) / 10;
    };
    this.decrement = function(item) {
      // item.rating -= 0.1
      item.rating = ((item.rating * 10) -1) /10;
    };
  }]);
