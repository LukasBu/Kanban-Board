var myApp = angular.module("myApp", []);

myApp.controller("UserDataCtrl", function ($scope, $http) {
    $http.get('/get/Users').then(function (response) {
        $scope.userList = response.data;
    });
});

myApp.factory('logTimeTaken', [function() {  
    var logTimeTaken = {
        request: function(config) {
            config.requestTimestamp = new Date().getTime();
            return config;
        },
        response: function(response) {
            response.config.responseTimestamp = new Date().getTime();
            return response;
        }
    };
    return logTimeTaken;
}]);

myApp.config(['$httpProvider', function($httpProvider) {  
    $httpProvider.interceptors.push('logTimeTaken');
}]);

myApp.controller('BacklogDataCtrl', function ($scope, $http) {
    $http.get('/get/Backlogs').then(function (response) {
        $scope.backlogsList = response.data;
    });

    $scope.test = function () {
        $http.post('/post/backlog', $scope.formData).then(function (response) {
            $scope.backlogsList = response.data;
            $scope.time = response.config.responseTimestamp - response.config.requestTimestamp;
            $scope.recieved = true;
        });
    };
});

myApp.controller('NewTaskCtrl', function ($scope, $http ) {
    $http.post('/get/NewTask').then(function (response) {
        $scope.tasksList = response.data;
    });

    $scope.test = function () {
        $http.post('/post/NewTask', $scope.formData).then(function (response) {
            $scope.tasksList = response.data;
        });
    };
});

myApp.controller('editTask', function ($scope, $http ) {
    $http.post('/get/editTask').then(function (response) {
        $scope.editTask = response.data;
    });

    $scope.test = function () {
        $http.post('/post/editTask', $scope.formData).then(function (response) {
            $scope.editTask = response.data;
        });
    };
});


myApp.controller("TaskDataCtrl", function ($scope, $http) {
    $http.get('/get/Tasks').then(function (response) {
        $scope.tasksList = response.data;
    });
});

myApp.service('myService', function () {
    var content;
    this.update = function (response) {
        content = response;
    };
    this.getContent = function () {
        return content;
    };
});