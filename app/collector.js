'use strict'

angular.module('collector', ['ngRoute', 'ngSanitize', 'ui.utils', 'ui.bootstrap']);

angular.module('collector').config([ '$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/pictures', {
		controller : 'PicturesController',
		templateUrl : 'partials/pictures.html'
	})
	.when('/videos', {
        controller : 'VideosController',
        templateUrl : 'partials/videos.html'
    })
    .when('/listings', {
        controller : 'ListingsController',
        templateUrl : 'partials/listings.html'
    })
    .otherwise({
		controller : 'PicturesController',
        redirectTo : '/pictures'
    });
}]);

angular.module('collector').controller('MainController', ['$scope', '$location', function($scope, $location) {
	$scope.isActive = function (viewLocation) { 
        return $location.path().indexOf(viewLocation) > -1;
    };
	
	$scope.go = function(url) {
		$location.path(url)
	};
}]);