(function () {
    "use strict";
    
    angular.module('public')
    .service('MenuPreferenceService', MenuPreferenceService);

    MenuPreferenceService.$inject = ['$http'];
    function MenuPreferenceService($http) {
      var service = this;
    
      service.savePreference = function (menuPreference) {
        service.MenuPreference = menuPreference;
      };

      service.getPreference = function () {
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