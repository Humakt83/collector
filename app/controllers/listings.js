'use strict'

angular.module('collector').controller('ListingsController', ['$scope', '$http', function($scope, $http) {
    
	$http.get('res/lists/special.json').then(function(result) {
        $scope.specials = result.data;
    });
    
}]);