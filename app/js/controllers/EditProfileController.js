'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarurl) {
        $scope.user = {};

        $scope.getGravatarUrl = function(email) {
              return gravatarurl.gravatarUrlBuilder(email);          
        };
    }
);
