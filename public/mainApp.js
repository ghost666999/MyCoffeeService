var mainAppModule = angular.module('mainApp', ['ngRoute', 'userControllers' ]);
var userControllers = angular.module('userControllers', []);


	mainAppModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'views/user-analysis.html',
				controller: 'userController'
			})
	}]);