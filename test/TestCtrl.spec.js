describe('Users factory', function () {
    it('has a dummy spec to test 2 + 2', function () {
        // An intentionally failing test. No code within expect() will never equal 4.
        expect(2 + 2).toEqual(4);
    });
});

describe('AppService', function () {
    beforeEach(module('app'));
    var AppService;


    beforeEach(function () {

        mockDependency = {
            backendUrl:"test"
        };

        module(function ($provide) {
            $provide.value('config', mockDependency);
        });

        mockedError = {
            error:function(){
                console.log("error");
            }
    };

        module(function ($provide) {
            $provide.value('ResponseService', mockedError);
        });
    });


// Set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function (_AppService_) {
        AppService = _AppService_;
    }));

// A simple test to verify the Users service exists
    it('should exist', function () {
        expect(AppService).toBeDefined();
    });

    var httpLocalBackend;
    beforeEach(inject(function ($httpBackend) {
        httpLocalBackend = $httpBackend;
    }));



    it('test data',function(){

        var testData = function(stuffId) {
            if(stuffId){
                expect(stuffId.stuffId).toBe(1);
            }
         };

        var failTest = function(error) {
            console.log(error);
            expect(error).toBeUndefined();
        };

        var httpResponse = { "stuffId": 1 };

        httpLocalBackend.expectGET("test/test").respond(200, httpResponse);
        AppService.getData()
            .then(testData)
            .catch(failTest);

        httpLocalBackend.flush();
    })


    it('remove data',function(){

        var testData = function(stuffId) {
            if(stuffId){
                expect(stuffId.stuffId).toBe(1);
            }
        };

        var failTest = function(error) {
            console.log(error);
            expect(error).toBeUndefined();
        };

        var httpResponse = { "stuffId": 1 };

        httpLocalBackend.expectDELETE("test/delete/1").respond(500, httpResponse);
        AppService.removeData(1)
            .then(testData)
            .catch(failTest);

        httpLocalBackend.flush();
    })
});

describe('SimpleService', function () {
    beforeEach(module('app'));
    var SimpleService;
// Set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(function (_SimpleService_) {
        SimpleService = _SimpleService_;
    }));

// A simple test to verify the Users service exists
    it('should exist', function () {
        expect(SimpleService).toBeDefined();
    });

    it('test function',function(){
       expect(SimpleService.respond()).toBe("Yes!");
    });
});




describe('TestTwoCtrl', function () {
    beforeEach(module('app'));

    var TestTwoCtrl, $scope, $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    beforeEach(function () {
        // The injector unwraps the underscores (_) from around the parameter names when matching

        $scope = {};
        TestTwoCtrl = $controller('TestTwoCtrl', {$scope: $scope});

    });

    it('should be defined', function () {
        expect(TestTwoCtrl).toBeDefined();
    });

});



describe('TestCtrl', function () {
    beforeEach(module('app'));

    var TestCtrl, $scope;

    beforeEach(function () {

        mockDependency = {
            backendUrl:"adsfa"
        };

        module(function ($provide) {
            $provide.value('config', mockDependency);
        });

        mockedError = {
            error:function(){
                console.log("error");
            }
        };

        module(function ($provide) {
            $provide.value('ResponseService', mockedError);
        });

    });

    beforeEach(inject(function ($rootScope, $controller, _AppService_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        var $rootScope = $rootScope.$new();
        $scope = $rootScope.$new();
        TestCtrl = $controller('TestCtrl', {'$rootScope': $rootScope, '$scope': $scope, 'AppService': _AppService_});
    }));


    it('sets the strength to "strong" if the password length is >8 chars', function () {
        var result = $scope.add(3 ,5);
        expect(result).toEqual(8);
    });

});