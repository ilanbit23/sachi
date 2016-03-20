'use strict';

angular.module('myApp.activity', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/activity/:pageName', {
            templateUrl: 'activity/activity.html',
            controller: 'activityCtrl as vm'
        });
    }])

    .controller('activityCtrl', ['$routeParams', 'DataFactory', 'toaster', function ($routeParams, DataFactory, toaster) {

        var ctrl = this;
        var pageName = $routeParams.pageName;
        var currVideoId = $routeParams.videoId;
        ctrl.firstVideo = true;
        ctrl.lastVideo = true;

        //ctrl.currVideo = 'https://player.vimeo.com/video/157099080?autoplay=0&title=0&byline=0&portrait=0&watchlater=0';

        function setCurrVideo(videoId) {
            ctrl.currVideo = DataFactory.getVideo(videoId);
            if (ctrl.currVideo === ctrl.data.videosData[0]) ctrl.firstVideo = true;
            else ctrl.firstVideo = false;
            if (ctrl.currVideo === ctrl.data.videosData[ctrl.data.videosData.length-1]) ctrl.lastVideo = true;
            else ctrl.lastVideo = false;
        }

        var prmData = DataFactory.getDataForPage(pageName);
        prmData.then(function (data) {
            ctrl.data = data;
            if (!currVideoId) currVideoId = data.videosData[0].id;
            setCurrVideo(currVideoId);


            var activeSection = ctrl.data.sections[0];
            activeSection.selected = true;

            ctrl.sectionClicked = function (section) {
                if (section === activeSection) return;
                section.selected = true;
                activeSection.selected = false;
                activeSection = section;
                var w = window.innerWidth;
                var h = window.innerHeight;
                var winUrl = 'http://www.google.com/maps/d/u/1/viewer?authuser=1&mid=z3oXywwnQlYo.kq5dhi0856sM&t=' + Date.now();
                if (section.type === 'showActivityMap') {
                    if (w>860) {
                        window.open(winUrl, "", "top=100, left=100,width=1200, height=500");
                    }
                    else {
                        window.open(winUrl, "", "top=0, left=0,width=" + w + ", height=500");
                    }

                    //ctrl.showActivityMap = true;
                }
            },

            ctrl.prevVideo = function () {
                var idx = ctrl.data.videosData.indexOf(ctrl.currVideo);
                var prevVideo = ctrl.data.videosData[--idx];
                setCurrVideo(prevVideo.id);
            },

            ctrl.nextVideo = function () {
                var idx = ctrl.data.videosData.indexOf(ctrl.currVideo);
                var nextVideo = ctrl.data.videosData[++idx];
                setCurrVideo(nextVideo.id);
            }
        });

        ctrl.updateModel = function () {
            console.log('Model updated: ', ctrl.data);
            DataFactory.updatePage(pageName, ctrl.data).then(function () {
                console.log(pageName + ' Updated Succesfully');
            });
        };

        ctrl.pop = function(){
            toaster.pop('success', "הצלחה", "הטקסט עודכן בהצלחה");
            //toaster.pop('error', "title", "text");
            //toaster.pop('warning', "title", "text");
            //toaster.pop('note', "title", "text");
        };
        //ctrl.showActivityMap = false;

    }]);
