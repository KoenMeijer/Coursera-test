(function () {
    'use strict';

    angular.module('DataModule')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/categories.json")
            });

            return response.then(function (result) {
                return result.data;
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            var response = $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
              params: {category: categoryShortName}
            });

            return response.then(function (result) {
                return result.data.menu_items;
            });
        };
    }
})();