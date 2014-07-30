var fld = angular.module('fld', [
	'ngAnimate', 'ngRoute', 'angular-loading-bar', 'tkDirectives'
]);

fld.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '/views/index.html'
		})
		.otherwise({redirectTo: '/'})
});
