eventsApp.controller('EditEventController', function($scope) {
    $scope.saveEvent = function(event, newEventForm) {
        if(newEventForm.$valid) {
            window.alert("this");
        }
    };

    $scope.cancelEdit = function() {
        window.location('/EventDetails.html');
    };
});