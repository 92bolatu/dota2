/**
 * Created by Cassandra on 2016/9/14.
 */
'use strict';

angular.module('dota2App')
  .controller('HeroController', function ($scope, $http) {
    $scope.heros = [];


    $scope.init = function () {
      Object.keys(HeroJson).forEach(function (x,i) {
        HeroJson[x].key = x;
        HeroJson[x].nick = x.toUpperCase().replace(/\_/g,' ');
      });
      $scope.heros = HeroJson;
    };

    $scope.init();

  });
