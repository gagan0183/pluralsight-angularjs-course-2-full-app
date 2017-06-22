eventsApp.controller('EditEventController', function($scope, eventData, $log) {
    $scope.saveEvent = function(event, newEventForm) {
        if(newEventForm.$valid) {
            console.log("event: " + event);
            event.id = 999;
            eventData.saveEvent(event)
                    .success(function(event) {
                        $scope.event = event;
                    })
                    .error(function(data, status, headers, config) {
                        $log.warn(data, status, headers(), config);
                    });
        }
    };

    $scope.cancelEdit = function() {
        window.location('/EventDetails.html');
    };
});