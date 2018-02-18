(function() {
    'use strict';

    angular.module("NarrowItDownApp", [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var list = this;

        list.searchTerm = "";

        list.narrowItDown = function() {
            var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);

            promise.then(function (response) {
                list.items = response;
            })
            .catch(function (error) {
                console.log("Something went terribly wrong.");
            });
        };

        list.removeItem = function (itemIndex) {
            list.items.splice(itemIndex, 1);
          };
    }


    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            console.log("searchTerm: " + searchTerm);
            var response = $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            });

            return response.then(function (result) {
                var foundItems = [];

                for (var i = 0; i < result.data.menu_items.length; i++) {
                    var name = result.data.menu_items[i].name;
                    if (name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                        foundItems.push(result.data.menu_items[i]);
                    }              
                }

                return foundItems;
            });
          };
    }


    FoundItems.$inject = [];
    function FoundItems() {
        var ddo = {
            templateUrl: 'listItem.html',
            scope: {
                items: '<',
                onRemove: '&'
            }
        }
        return ddo;
    }
})();