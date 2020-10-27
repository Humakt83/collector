'use strict'

angular.module('collector').controller('ListingsController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    
	$http.get('res/lists/special.json').then(function(result) {        
        result.data.sort(function (a, b) { 
            return a.title.localeCompare(b.title);
        });
        $scope.specials = result.data;
    });

    $scope.goToPicture = function(query) {
        if (!query) {
            return;
        }
        $location.path('pictures').search({query});
    }
    
}]);