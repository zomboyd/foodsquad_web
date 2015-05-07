var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider)
{
	$routeProvider

		.when('/', 
		{
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})

		.when('/help',
		{
			templateUrl: 'views/help.html',
			controller: 'helpController'
		});
});

app.controller('mainController', function($scope)
{
	$scope.tagline = 'To the moon or home';
});

app.controller('helpController', function ($scope)
{
	$scope.tagline = 'help pls'
});
