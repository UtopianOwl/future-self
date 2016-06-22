var app = angular.module('messengerApp');

app.service('managerService', ['apiService', 'dbService', function (apiService, dbService) {
    var self = this;
    this.user = {};
    
    this.login = function(user) {
        dbService.get(user).then(function (thisUser) {
            self.user = thisUser;
        });
    }
    this.addUser = function(user) {
        dbService.post(user).then(function (newUser) {
            self.user = newUser;
        });
    }
    this.sendMessage = function(message) {
        message.date = new Date();
        dateMS = message.date.getTime();
        sendAtMS = message.sendAt.getTime();
        message.timeDelay = Math.abs(sendAtMS - dateMS);
        apiService.send(self.user, message).then(function (updatedUser) {
            self.user = updatedUser;
        });
    }
}]);