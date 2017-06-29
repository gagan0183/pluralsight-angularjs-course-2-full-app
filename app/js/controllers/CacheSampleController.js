eventsApp.controller('CacheSampleController', function($scope, myCache) {
    $scope.addToCache = function(st, value) {
        myCache.put(st, value);
    };

    $scope.readFromCache = function(st) {
        return myCache.get(st);
    };

    $scope.getCacheStats = function() {
        return myCache.info();
    }
});