'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('foodFinder', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var menu = [
      {
        "id": "chicken-salad",
          "name": "Chicken Salad",
          "img": "chicken-salad.jpg",
          "calories": 230,
          "rating": 4.1
      },
      {
        "id": "chocolate-croissant",
        "name": "Chocolate Croissant",
        "img": "choco-croissant.jpg",
        "calories": 406,
        "rating": 4.5
      },
      {
        "id": "strawberry-pudding",
        "name": "Strawberry Pudding",
        "img": "strawberry-pudding.jpg",
        "calories": 190,
        "rating": 4.3
      }
    ];

    this.getMenu = function() {
      return menu;
    };

    /*
    this.getMenu = function() {
      return $.get('/menu/menu.json');
    };
    */

  });
