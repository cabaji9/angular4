var app = angular.module('app');
app.controller('TestTwoCtrl', ['$scope', TestTwoCtrl]);
function TestTwoCtrl( $scope ) {
  $scope.value = 'TEST TWO!';
};

