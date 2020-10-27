'use strict'

angular.module('collector').controller('PicturesController', ['$scope', '$sce', '$modal', 'Collections', function($scope, $sce, $modal, Collections) {
	
	$scope.collectionObjects = Collections.getCollections();
	
	$scope.trustAsHtml = $sce.trustAsHtml;

	$scope.activeIndex = 0;

	$scope.activeCollection = 0;

	if (document.location.href.indexOf('?query=') > 0) {
		var query = document.location.href.split('?query=')[1];
		$scope.collectionObjects.find(function (collection, index) {
			if (collection.query === query) {
				$scope.activeCollection = index;
				return true;
			}
		});
	} else {
		document.location.href = document.location.href + '?query=' + $scope.collectionObjects[0].query;
	}
	
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

	$scope.changeCollectionQuery = function(elementTarget) {
		$scope.activeCollection = [].indexOf.call(elementTarget.parentNode.children, elementTarget);
		var collection = $scope.collectionObjects[$scope.activeCollection];
		var location = document.location.href;
		location = location.indexOf('?')  > 0 ? location.split('?')[0]: location;
		document.location.href = location + '?query=' + collection.query;
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
		element.on('slide.bs.carousel', function(event) {
			scope.changeCollectionQuery(event.relatedTarget);
			scope.removePictureChangeTimer();
			scope.changeIndex(0);
			scope.$apply();
		});
	}
})