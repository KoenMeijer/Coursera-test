(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['preferenceMenu'];
    function MyInfoController(preferenceMenu) {
      var myinfo = this;
        
      myinfo.preferenceMenu = preferenceMenu;
      if (preferenceMenu) {
        myinfo.imageNumber = preferenceMenu.short_name.replace(/[^A-Z]/g,'');
      }
    }
    })();
