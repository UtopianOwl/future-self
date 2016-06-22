var app = angular.module('messengerApp');

app.controller('archiveCtrl', ['$scope', 'managerService', '$location', function ($scope, managerService, $location) {
    $scope.managerService = managerService;
    
}]);