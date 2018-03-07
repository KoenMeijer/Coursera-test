(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuPreferenceService'];
    function SignUpController(MenuPreferenceService) {
      var signup = this;
      signup.submit = function () {
        var number = signup.user.menunumber;

        var promise = MenuPreferenceService.getMenuItem(number);
        promise.then(function (response) {
            signup.ShowInvalidMessage = false;

            MenuPreferenceService.savePreference(response.data);
            signup.ShowSaveMessage = true;
        })
        .catch(function (error) {
            signup.ShowSaveMessage = false;
            signup.ShowInvalidMessage = true;
        });
        signup.completed = false;
      };
    }
    })();
    