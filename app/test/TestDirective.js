var app = angular.module('app');

app.directive('addClass',function(){
    var ngDinamicImg = {
        link: function postLink(scope, element, attr) {
                attr.$set("class","customClass");
        }
    };
    return ngDinamicImg;
});