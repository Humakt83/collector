'use strict'

angular.module('collector').controller('VideosController', ['$scope', '$sce', function($scope, $sce) {
	$scope.videos = ['5j2Ni7KANG0','WD7oWrYGhKI','SX86NfTS3i4','Q2tsUBibriQ','dBL75f7V8rI']
	
	$scope.getYoutube = function(video) {
		return $sce.trustAsResourceUrl('//www.youtube.com/embed/' + video)
	}
}]);