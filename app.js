var studentRoster = angular.module('studentRoster', ['ui.router']);
studentRoster.config(function($stateProvider) {


$stateProvider.state('home', {
  url: "",
  templateUrl: "partials/home.html"
});

$stateProvider.state('whoishere', {
  url:"/whoishere",
  templateUrl: "partials/whoishere.html"
});

});
