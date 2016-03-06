'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl as vm'
        });
    }])


    .controller('homeCtrl', ['$timeout', 'DataFactory', function ($timeout, DataFactory) {

        var ctrl = this;

        var currPlayedVideo = null;

        var prmData = DataFactory.getDataForPage('home');
        prmData.then(function (data) {
            console.log('data', data);
            ctrl.data = data;


            ctrl.playVideo = function (video) {

                if (currPlayedVideo) {
                    currPlayedVideo.playNow = false;
                    currPlayedVideo.isPlaying = false;
                }
                currPlayedVideo = video;

                video.isPlaying = true;
                $timeout(function () {
                    video.playNow = true;
                }, 500);
            };

            ctrl.checkName = function (data) {
                console.log('data', data);
                if (data !== 'admin') {
                    console.log('data', data);
                    return "ססמא שגויה";
                }
                return "ברוך הבא"

            }

        });
    }]);