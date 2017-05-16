var app = angular.module('app');
app.controller('TestCtrl', ['$rootScope', '$scope', 'AppService', TestCtrl]);
function TestCtrl($rootScope, $scope, AppService) {

    $scope.value = 'HOLA TEST ONE';

    $scope.nombre = "";

    $scope.bringData = function (evt) {
        AppService.getData().then(function (data) {
            $scope.tests = data;
        });

    };

    $scope.bringData();

    $scope.add = function (a, b) {
        return a + b;
    };

    $scope.checkName = function(data, id) {
        if (id === 2 && data !== 'awesome') {
            return "Username 2 should be `awesome`";
        }
    };

    $scope.saveData = function() {
         var test = {nombre:nombre};
        AppService.saveData(test).then(function (data) {
        });
    };

    //grid
    $scope.saveTest = function(data, id,index) {
        //$scope.user not updated yet
        angular.extend(data, {id: id});
        AppService.saveData(data).then(function (response) {
            console.log(response);
            var id =response.id;
            if(!$scope.tests[index].id){
                $scope.tests[index].id = id;
            }

        });
    };

    // remove user
    $scope.removeTest = function(id,index) {
        AppService.removeData(id).then(function (response) {
            $scope.tests.splice(index, 1);
        });
    };

    // add user
    $scope.addTest = function() {
        $scope.inserted = {
            name: ''
        };
        $scope.tests.push($scope.inserted);
    };


};

