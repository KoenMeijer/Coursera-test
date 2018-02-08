(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

        toBuyList.buyItem = function(idx) {
            ShoppingListCheckOffService.buyItem(idx);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtList = this;

        alreadyBoughtList.items = ShoppingListCheckOffService.getItemsAlreadyBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var itemsToBuy = [
                    { name: "Cookies", quantity: 10 },
                    { name: "Snickers", quantity: 2 },
                    { name: "M&M's", quantity: 12 },
                    { name: "Mars", quantity: 1 },
                    { name: "Chocolates", quantity: 5 }
                ];

        var itemsBought = [];

        service.buyItem = function (idx) {
            var itemToBuy = itemsToBuy[idx];

            itemsToBuy.splice(idx, 1);
            itemsBought.push(itemToBuy);
        };
        
        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsAlreadyBought = function () {
            return itemsBought;
        };
    };
})();