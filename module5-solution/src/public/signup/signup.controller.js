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

            var preferenceObject = response.data;
            preferenceObject.user = signup.user;

            MenuPreferenceService.savePreference(preferenceObject);
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
    