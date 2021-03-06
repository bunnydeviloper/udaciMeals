'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', ['foodFinder', 'orderManagement',  function(menu, orderManager) {
    let vm = this;

    this.name = 'Udacity Cafeteria';

    menu.getMenu().then(function(data) {
      vm.items = data;
    });

    this.chooseItem = function(menuCategory, menuItemName) {

    };

    this.increment = function(item) {
      // item.rating += 0.1
      item.rating = ((item.rating * 10) + 1) / 10;
    };
    this.decrement = function(item) {
      // item.rating -= 0.1
      item.rating = ((item.rating * 10) -1) /10;
    };
  }]);
