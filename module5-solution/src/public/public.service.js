(function () {
    "use strict";
    
    angular.module('public')
    .service('MenuPreferenceService', MenuPreferenceService);

    MenuPreferenceService.$inject = ['$http'];
    function MenuPreferenceService($http) {
      var service = this;
    
      service.savePreference = function (menuPreference) {
        console.log("MenuPreference: " + menuPreference);
        service.MenuPreference = menuPreference;
        console.log("service.MenuPreference: " + service.MenuPreference);
      };

      service.getPreference = function () {
        console.log("service.MenuPreference: " + service.MenuPreference);
        return service.MenuPreference;
      };

      service.getMenuItem = function (shortName) {
        var response = $http({
          method: "GET",
          url: ("https://pacific-anchorage-93797.herokuapp.com/menu_items/" + shortName + ".json")
        });
    
        return response;
      };
    }
    
    })
();