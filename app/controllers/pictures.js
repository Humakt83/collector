'use strict'

angular.module('collector').controller('PicturesController', ['$scope', '$sce', '$modal', 'Collections', function($scope, $sce, $modal, Collections) {
	
	$scope.collectionObjects = Collections.getCollections();
	
	$scope.trustAsHtml = $sce.trustAsHtml;

	$scope.activeIndex = 0;
	
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

	$scope.changeIndex = function(index) {
		$scope.activeIndex = index;
	};
}]);

angular.module('collector').controller('BigPictureCtrl', ['$scope', '$modalInstance', 'imagehref', function($scope, $modalInstance, imagehref) {
	$scope.image = imagehref;
	
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
}]);

angular.module('collector').directive('slidechange', function() {
	return function(scope, element) {
		element.on('slide.bs.carousel', function() {
			scope.changeIndex(0);
			scope.$apply();
		});
	}
})