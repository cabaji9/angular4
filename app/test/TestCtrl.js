var app = angular.module('app');
app.controller('TestCtrl', ['$rootScope', '$scope', 'AppService', TestCtrl]);
function TestCtrl($rootScope, $scope, AppService) {

    $scope.value = 'HOLA TEST ONE';

    $scope.bringData = function (evt) {
        AppService.getData().then(function (data) {
            $scope.dataBack = data;
        });

    };

    $scope.add = function (a, b) {
        return a + b;
    };
};

