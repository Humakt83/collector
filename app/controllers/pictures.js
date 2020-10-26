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

	$scope.removePictureChangeTimer = function() {
		clearTimeout($scope.pictureChangeTimeOut);
	}

	$scope.changeIndex = function(index) {
		if ($scope.activeIndex === index) {
			return;
		}
		$scope.removePictureChangeTimer();
		var el = angular.element('.active .image__main');
		el.removeClass('fade--in');
		el.addClass('fade--out');
		$scope.pictureChangeTimeOut = setTimeout(function() {
			$scope.activeIndex = index;
			el.removeClass('fade--out');
			el.addClass('fade--in');
			$scope.$apply();
		}, 500);
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
			scope.removePictureChangeTimer();
			scope.changeIndex(0);
			scope.$apply();
		});
	}
})