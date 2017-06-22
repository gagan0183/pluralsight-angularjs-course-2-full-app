eventsApp.factory('eventData', function($http, $log) {
    return {
            getEvent: function() {
                return $http({
                    method: 'GET',
                    url: '/data/event/1'
                });
            },
            saveEvent: function(event) {
                return $http({
                    method: 'POST',
                    url: '/data/event/'+ event.id,
                    data: JSON.stringify(event)
                });
            }
        }
});