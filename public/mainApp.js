var mainAppModule = angular.module('mainApp', ['ngRoute', 'userControllers' ]);
var userControllers = angular.module('userControllers', []);


	mainAppModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'views/signin.html',
				controller: 'userController'
			})
            .when('/promotion', {
                templateUrl: 'views/promotion.html',
                controller: 'userController'
            })
            .when('/signin', {
                templateUrl: 'views/signin.html',
                controller: 'userController'
            })
            .when('/coffeelist', {
                templateUrl: 'views/coffeelist.html',
                controller: 'userController'
            })
            .when('/addcoffee', {
                templateUrl: 'views/addcoffee.html',
                controller: 'userController'
            })
            .when('/analysis', {
                templateUrl: 'views/user-analysis.html',
                controller: 'userController'
            })
	}]);

