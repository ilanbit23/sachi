(function(){

    'use strict';

    var module = angular.module('myApp.factories', []);

    module.factory('DataFactory', function ($q, $sce, $http) {
        var obj = null;




        //obj.videosData = obj.videosData.map(function (video) {
        //    video.url = $sce.trustAsResourceUrl(video.url);
        //    return video;
        //});
        //console.log('obj.home', obj.home);

        var prmData = $http.get('server/server.php').then(function (res) {
            var obj = res.data;
            for (var videoId in obj.videosData) {
                var video = obj.videosData[videoId];
                video.urlShort = $sce.trustAsResourceUrl(video.urlShort + 'api=1&player_id=video'+video.id);
                //video.urlShort = video.urlShort + 'api=1&player_id=video'+video.id;
                //console.log('video.urlShort', video.urlShort);
                video.urlFull = $sce.trustAsResourceUrl(video.urlFull);
            }
            return obj;
        });

        function prepareData(res, pageName) {
            var data = res[pageName];
            data.videosData = [];

            for (var videoId in res.videosData) {
                if (!res.videosData.hasOwnProperty(videoId)) continue;
                var video = res.videosData[videoId];
                if (pageName === 'home' || video.page === pageName) data.videosData.push(video);
            }

            return data;

        }

        var dataFactory = {

            getDataForPage: function(pageName) {

                return prmData.then(function (res) {

                    //var data = angular.copy(res[pageName]);
                    prepareData(res, pageName)
                });





                //return $q(function(resolve, reject) {
                //    setTimeout(function() {
                //        if (true) {
                //            var data = angular.copy(obj[pageName]);
                //            data.videosData = [];
                //            for (var videoId in obj.videosData) {
                //                if (!obj.videosData.hasOwnProperty(videoId)) continue;
                //                var video = obj.videosData[videoId];
                //                if (pageName === 'home' || video.page === pageName) data.videosData.push(video);
                //            }
                //
                //            resolve(data);
                //        } else {
                //            reject('Cannot load data');
                //        }
                //    }, 0);
                //});

            },

            updatePage: function(pageName, data) {
                var self = this;
                //return $q(function(resolve, reject) {
                    obj[pageName] = data;
                    console.log('POSTING TO SERVER');
                    return $http.post('server/server.php', obj).then(function (res) {
                        return prepareData(res, pageName)

                    });


                //});

            },

            getVideo: function(videoId) {
                return obj.videosData[videoId];
            }
        };
        return dataFactory;

    });


})();



