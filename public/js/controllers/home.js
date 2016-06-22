var app = angular.module('messengerApp');

app.controller('homeCtrl', ['$scope', 'managerService', '$location', function ($scope, managerService, $location) {
    $scope.managerService = managerService;
    
    $scope.addUser = function() {
        managerService.addUser($scope.newUser);
        $location.path('/send');
    }
    $scope.login = function() {
        managerService.login($scope.user);
        $location.path('/send');
    }
}]);