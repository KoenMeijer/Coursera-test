(function (){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', 
    function ($scope) {
        $scope.lunchmenu = "";
        $scope.message = "";
        $scope.checkMenu = function () {
            if ($scope.lunchmenu == "")
            {
                $scope.message = "Please enter data first";
                return;
            }

            var lunchItemsCount = calculateNumberOfLunchItems($scope.lunchmenu);
            
            if (lunchItemsCount > 3) {
                $scope.message = "Too much!";
            } 
            else {
                $scope.message = "Enjoy!";
            }
        };
        function calculateNumberOfLunchItems(string) {
            var lunchItemsArray = string.split(",");

            return lunchItemsArray.length;
        };

    });
})();