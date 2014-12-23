'use strict'

angular.module('collector', ['ui.utils']);

angular.module('collector').controller('GameCollectionCtrl', ['$scope', 'Collections', function($scope, Collections) {
	
	$scope.collectionObjects = Collections.getCollections();
	
}]);