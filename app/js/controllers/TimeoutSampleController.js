eventsApp.controller('TimeoutSampleController', function($scope, $timeout) {
    var promise = $timeout(function() {
        $scope.name = "name";
    }, 3000);

    $scope.cancel = function() {
        $timeout.cancel(promise);

        throw {message : 'error is there'};
    };
});