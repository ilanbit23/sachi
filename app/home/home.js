'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl as vm'
        });
    }])


    .controller('homeCtrl', ['$scope', '$timeout', 'DataFactory', function ($scope, $timeout, DataFactory) {

        var ctrl = this;

        var currPlayedVideo = null;

        ctrl.getVideo = function (videoId) {
            return DataFactory.getVideo(videoId);
        };


        var prmData = DataFactory.getDataForPage('home');
        prmData.then(handleData);

        function handleData(data) {
                ctrl.data = data;
                ctrl.newVideo = {};
        }

        ctrl.playVideo = function (video) {

            //console.log('PLAY VIDEO!!!');
            if (currPlayedVideo) {
                currPlayedVideo.playNow = false;
                currPlayedVideo.isPlaying = false;
            }
            currPlayedVideo = video;
            video.isPlaying = true;
            $timeout(function () {
                video.playNow = true;
                var iframe = $('#video'+video.id)[0];
                //console.log('iframe', iframe);

                var player = $f(iframe);

                player.addEvent('ready', function() {
                    //console.log('READYYY');
                    player.addEvent('finish', onFinish);
                });

                function onFinish(id) {
                    $scope.$apply(function () {
                        currPlayedVideo.playNow = false;
                        currPlayedVideo.isPlaying = false;
                    });
                }
            }, 500);
        };

        ctrl.saveVideo = function () {
            console.log('newvideo', ctrl.newVideo);
            DataFactory.addVideo(ctrl.newVideo).then(handleData);
        };
        ctrl.moveVideo = function (video, dir) {
            var idx = getVideoIndex(video);

            // temp = x, x=y, y=temp
            var temp = ctrl.data.videos[idx+dir];
            ctrl.data.videos[idx+dir] = video;
            ctrl.data.videos[idx] = temp;
            DataFactory.updatePage('home', ctrl.data).then(handleData);
        };
        ctrl.deleteVideo = function (video) {
            DataFactory.deleteVideo(video).then(handleData);
        };

        function getVideoIndex(video) {
            var idx;
            ctrl.data.videos.forEach(function (v, i) {
                if ( v.id == video.id )  idx = i;
            });
            return idx;
        }

    }]);