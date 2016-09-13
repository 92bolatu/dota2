/**
 * Created by Cassandra on 2016/8/13.
 */
"use strict";
angular.module('dota2App').directive('heroIcon',function () {
    return{
        templateUrl:  '/components/directive/hero-icon/hero-icon.html',
        restrict:'EA',
        replace:true,
        scope:{
            heroIcon:'='
        } 
    };
});
