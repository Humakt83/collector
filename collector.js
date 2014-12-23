'use strict'

angular.module('collector', ['ngSanitize', 'ui.utils', 'ui.bootstrap']);

angular.module('collector').controller('GameCollectionCtrl', ['$scope', '$sce', '$modal', 'Collections', function($scope, $sce, $modal, Collections) {
	
	$scope.collectionObjects = Collections.getCollections();
	
	$scope.trustAsHtml = $sce.trustAsHtml;
	
	$scope.openModal = function(image) {
		$modal.open({
			templateUrl: 'bigPicture.html',
			controller: 'BigPictureCtrl',
			size: 'lg',
			resolve: {
				imagehref: function() {
					return image;
				}
			}
		})
	}
}]);

angular.module('collector').controller('BigPictureCtrl', ['$scope', '$modalInstance', 'imagehref', function($scope, $modalInstance, imagehref) {
	$scope.image = imagehref;
	
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
}]);