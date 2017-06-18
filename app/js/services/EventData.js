eventsApp.factory('eventData', function($http, $log) {
    return {
            getEvent: function(successCall) {
                return $http({
                    method: 'GET',
                    url: '/data/event/1'
                });
            }
        }
});