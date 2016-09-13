/**
 * Created by Cassandra on 2016/9/14.
 */
'use strict';

angular.module('dota2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hero', {
        url: '/hero',
        templateUrl: 'app/hero/hero.html',
        controller: 'HeroController'
      });
  });
