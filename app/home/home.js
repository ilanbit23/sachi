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
        }


        var prmData = DataFactory.getDataForPage('home');
        prmData.then(function (data) {
            console.log('data', data);
            ctrl.data = data;
            console.log('data.videosData', data.videosData);


            ctrl.playVideo = function (video) {

                if (currPlayedVideo) {
                    currPlayedVideo.playNow = false;
                    currPlayedVideo.isPlaying = false;
                }
                currPlayedVideo = video;



                video.isPlaying = true;
                $timeout(function () {
                    video.playNow = true;
                    var iframe = $('#video'+video.id)[0],
                        player = $f(iframe);

                    player.addEvent('ready', function() {
                        console.log('READYYY');
                        player.addEvent('finish', onFinish);
                    });

                    function onFinish(id) {
                        $scope.$apply(function () {
                            currPlayedVideo.playNow = false;
                            currPlayedVideo.isPlaying = false;
                        });


                        console.log('video has ended');
                        //$('#vimeoembed').addClass('finished');
                    }





                }, 500);
            };





        });
    }]);