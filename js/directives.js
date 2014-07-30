var tkDirectives = angular.module('tkDirectives', []);

tkDirectives.directive('tkSlider', function(){
	var takius = function(scope, element, attr){
		$(element).ccslider({
        	effectType: '3d',
        	_3dOptions: {
        	    imageWidth: 550,
        	    imageHeight: 260,
        	},
        	pauseOnHover: true,
        	directionNav: true,
        	controlLinks: false
		});
	}
	return{
		restrict: 'A',
		link: takius
	}
});
