'use strict';
angular.module('dota2App')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {title: 'Home', link: '/'},
      {title: 'Hero', link: '/hero'}
    ];
    $scope.isCollapsed = true;
    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
