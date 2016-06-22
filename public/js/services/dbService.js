var app = angular.module('messengerApp');

app.service('dbService', ['$http', function ($http) {

    this.get = function (user) {
        return $http({
            url: '/future-self/user',
            method: 'GET',
            params: { phone: user.phone }
        }).then(function (response) {
            return response.data;
        });
    };
    this.post = function (user) {
        return $http({
            url:'/future-self/user',
            method: 'POST',
            data: user
        }).then(function (response) {
            return response.data;
        });
    }
}]);