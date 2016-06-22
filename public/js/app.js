var app = angular.module('messengerApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/archive', {
        templateUrl : 'views/archive.html',
        controller : 'archiveCtrl'
    })
    .when('/send', {
        templateUrl : 'views/send.html',
        controller : 'sendCtrl'
    })
    .otherwise({
        templateUrl : 'views/home.html',
        controller : 'homeCtrl'
    });
}]);

app.controller('mainCtrl', ['$scope', 'managerService', '$location', function ($scope, managerService, $location) {
    $scope.managerService = managerService;
    
    $scope.addUser = function() {
        managerService.addUser($scope.newUser);
        $location.path('/send');
    }
    $scope.login = function() {
        managerService.login($scope.user);
        $location.path('/send');
    }
    $scope.sendMessage = function(message) {
        managerService.sendMessage();
        $location.path('/archive');
    }
}]);