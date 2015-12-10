angular.module('myServiceModule', [])

    .service("TwitterService",function(crossOrigin,endPoint,$q,$http){
        var authorizationResult = false;
        var tweets=[];
    return{

        initialize: function() {
            OAuth.initialize('9bp4qiyEXJqWrD6UxYbPbA5xgDM', {cache:true});
            authorizationResult = OAuth.create('twitter');
        },

        connectTwitter: function() {
            var deferred = $q.defer();
            OAuth.popup('twitter', {cache:true}, function(error, result) {
                if (!error) {
                    authorizationResult = result;
                    deferred.resolve(result);
                } else {
                    console.log(error);
                    deferred.reject(error);
                }
            });
            return deferred.promise;
        },

        getRelatedTweets : function (query) {
            var deferred = $q.defer();
            authorizationResult.get('https://api.twitter.com/1.1/search/tweets.json?q='+query)
                .success(function (data) {
                    console.log(data);
                    deferred.resolve(data);
                }).error(function (msg) {
                    deferred.reject(msg);
                    console.log(msg);
                });
            return deferred.promise;
        },

        setTweets:function(fetchTweets){
            tweets=[];
            tweets=fetchTweets;
        },

        getTweets:function(){
            return tweets;
        },
        SignOut: function() {
            OAuth.clearCache('twitter');
            authorizationResult = false;
        }
    }
    })
