'use strict'

angular.module('collector', ['ngSanitize', 'ui.utils']);

angular.module('collector').controller('GameCollectionCtrl', ['$scope', '$sce', 'Collections', function($scope, $sce, Collections) {
	
	$scope.collectionObjects = Collections.getCollections();
	
	$scope.trustAsHtml = $sce.trustAsHtml;
}]);