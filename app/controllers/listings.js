'use strict'

angular.module('collector').controller('ListingsController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    
	$http.get('res/lists/special.json').then(function(result) {
        $scope.specials = result.data;
    });

    $scope.goToPicture = function(query) {
        $location.path('pictures').search({query});
    }
    
}]);