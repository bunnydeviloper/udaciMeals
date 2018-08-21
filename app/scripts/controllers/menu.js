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
    let vm = this; // view model

    this.name = 'Udacity Cafeteria';

    this.items = menu.getMenu();

    /*
    menu.getMenu().then(function(data) {
      vm.items = data;
    });
    */

    this.chooseItem = function(menuCategory, menuItemName) {
      orderManager.chooseMenuOption(menuCategory, menuItemName);
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
