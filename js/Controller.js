var con=angular.module("Controllers", ['myServiceModule']);

con.controller("HomeController", function ($scope,TwitterService,$mdDialog,$location,$rootScope) {
    $scope.query='';
    $scope.SearchTweets=function(text){
        console.log(text)
        if(text==''){
            $mdDialog.show($mdDialog.alert()
                    .title('Alert!')
                    .content('Please Type a Query and then Press Search Button')
                    .ok('ok')
            );
        }
        else{
            $scope.isLoading = true;
            console.log(text);
            TwitterService.getRelatedTweets(text).then(function(data){
                if(data.statuses.length>0){
                    $scope.isLoading = false;
                    console.log(data);
                    TwitterService.setTweets(data);
                    $location.path('/showTweets');
                }
                else{
                    $scope.isLoading = false;
                    $mdDialog.show($mdDialog.alert()
                            .title('Alert!')
                            .content('No Tweets Found with respect to Keyword')
                            .ok('ok')
                    );
                }
            })
        }

    }



});

con.controller("LoginController", function ($scope,TwitterService,$mdDialog,$location,$rootScope) {
    TwitterService.initialize();

$scope.TwitterLogin=function(){

    TwitterService.connectTwitter().then(function() {
        $location.path('/home');
    });

}

});

con.controller("TweetsController", function ($scope,TwitterService,$mdDialog,$location) {

    $scope.tweets=[];

    $scope.tweets=TwitterService.getTweets();

    $scope.TwitterSignOut=function(){
        TwitterService.SignOut();
        $scope.tweets=[];
        $location.path('/login');


    }


});