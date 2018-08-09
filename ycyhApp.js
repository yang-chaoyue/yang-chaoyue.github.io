"use strict";
var app = angular.module('ycyh', []);
app.controller('ycyhCtrl', function($scope, $http, $interval) {
  $scope.count = 6;
  $scope.callGetCount = function() {
    $http({
        method : "GET",
        url : "https://kb1jwi4uvg.execute-api.us-west-1.amazonaws.com/prod01/addone"
      }).then(
        function(response) {
          if (response.data[2].cnt > $scope.count) {
            $scope.count = response.data[2].cnt;
          }
        }, function(response) {
          console.log(response);
        }
    );
  }
  $scope.callGetCount();
  $interval($scope.callGetCount, 3000);

  $scope.play1 = function() {
    $scope.count = $scope.count + 1;
    $("#audioDiv").children()[Math.floor(Math.random() * 4)].play();
    $http({
      method : "POST",
      url : "https://kb1jwi4uvg.execute-api.us-west-1.amazonaws.com/prod01/addone",
      data: { "name" : "kll" }
    }).then(
      function(response) {
      }, function(response) {
        console.log(response);
      }
    );
  }

});