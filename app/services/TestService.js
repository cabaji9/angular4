
    angular.module('app').service("AppService",
        ['$http', 'config', 'responseService', function ($http, configService, ResponseService ) {
            var context = configService.backendUrl;

            this.getData = function () {
                var url = context+"/test";
                return $http.get(url).then(
                    function (response) {
                        var responseVar = response.data;
                        return responseVar;
                    }, ResponseService.error);
            };


            this.saveData = function (test) {
                var url = context+"/save";
                return $http. post(url,test).then(
                    function (response) {
                        var responseVar = response.data;
                        return responseVar;
                    }, ResponseService.error);
            };


            this.removeData = function (id) {
                var url = context+"/delete/"+id;
                return $http.delete(url).then(
                    function (response) {
                        var responseVar = response.data;
                        return responseVar;
                    }, ResponseService.error);
            };
        }]);



    angular.module('app').service("SimpleService",
         function ( ) {


           this.respond = function(){
             return "Yes!"
           };
        });

