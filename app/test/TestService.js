
    angular.module('app').service("AppService",
        ['$http', 'config', 'responseService', function ($http, configService, ResponseService ) {
            var context = configService.backendUrl;

            this.getData = function () {
                var url = context+"/data";
                return $http.get(url).then(
                    function (response) {
                        var responseVar = response.data;
                        return responseVar;
                    }, ResponseService.error);
            }
        }]);



    angular.module('app').service("SimpleService",
         function ( ) {


           this.respond = function(){
             return "Yes!"
           };
        });

