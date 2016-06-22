var app = angular.module('messengerApp');

app.service('apiService', ['$http', function($http) {
    this.send = function(user, message) {
        return $http({
            url: '/future-self/message',
            method: 'POST',
            data: message,
            params: {'phone' : user.phone}
        }).then(function(response) {
            return response.data;
        });
    }
}]);