var app=angular.module("TwitterSearchApp",['ngRoute','Controllers','myServiceModule','Constants','ngMaterial']);

app.config(function($routeProvider){
    $routeProvider.
        when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        }).
        when('/showTweets', {
            templateUrl: 'templates/tweets.html',
            controller: 'TweetsController'
        }).
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        }).
        otherwise({
            redirectTo: '/login'
        });


});