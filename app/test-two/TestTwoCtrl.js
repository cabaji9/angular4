var app = angular.module('app');
app.controller('TestTwoCtrl', ['$rootScope', '$scope', '$filter',
  '$routeParams', TestTwoCtrl]);
function TestTwoCtrl($rootScope, $scope, $filter, $routeParams) {
  $scope.value = 'TEST TWO!';
};

