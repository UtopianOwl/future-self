var app = angular.module('messengerApp');

app.controller('sendCtrl', ['$scope', 'managerService', '$location', function ($scope, managerService, $location) {
    $scope.managerService = managerService;
    
    $scope.sendMessage = function() {
        managerService.sendMessage($scope.newMessage);
        $location.path('/archive');
    }
}]);