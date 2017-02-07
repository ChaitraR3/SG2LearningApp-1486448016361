angular.module('appRoutes', []).config(['$routeProvider', function ($routeProvider) {

    //console.log('Application routing logic');

    $routeProvider

        .when('/', {
        	 templateUrl: 'views/components/landingPage.html',
             controller: 'LandingController'
        })
       .when('/uploaddoc',{
    	    templateUrl: 'views/components/fileupload.html',
             controller: 'FileUploadController'
       })                        
            .otherwise({
            redirectTo: '/'
        })		


}]);
