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
        ctrl.videoId = $routeParams.videoId;
        ctrl.firstVideo = true;

        //ctrl.currVideo = 'https://player.vimeo.com/video/157099080?autoplay=0&title=0&byline=0&portrait=0&watchlater=0';

        var prmData = DataFactory.getDataForPage(pageName);
        prmData.then(function (data) {
            ctrl.data = data;
            ctrl.currVideo = data.videosData[0];
            if (ctrl.videoId) {
                ctrl.currVideo = DataFactory.getVideo(ctrl.videoId);
                if (ctrl.currVideo !== ctrl.data.videosData[0]) ctrl.firstVideo = false;
            }

            var activeSection = ctrl.data.sections[0];
            activeSection.selected = true;

            ctrl.sectionClicked = function (section) {
                if (section === activeSection) return;
                section.selected = true;
                activeSection.selected = false;
                activeSection = section;
            },

            ctrl.prevVideo = function () {
                var idx = ctrl.data.videosData.indexOf(ctrl.currVideo);
                if (idx > 0) ctrl.currVideo = ctrl.data.videosData[--idx];
                else ctrl.firstVideo = true;
            },

            ctrl.nextVideo = function () {
                var idx = ctrl.data.videosData.indexOf(ctrl.currVideo);
                if (idx < ctrl.data.videosData.length-1) ctrl.currVideo = ctrl.data.videosData[++idx];
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

    }]);
