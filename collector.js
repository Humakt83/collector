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
    .otherwise({
		controller : 'PicturesController',
        redirectTo : '/pictures'
    });
}]);