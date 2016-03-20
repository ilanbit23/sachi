(function(){

    'use strict';

    var module = angular.module('myApp.factories', []);

    module.factory('DataFactory', function ($q, $sce, $http) {
        var obj = {};
        var nextVideoId;
        function addVideoData(newVideo) {

            var newVideoData = {
                id: nextVideoId++,
                page: newVideo.page,
                urlShort: newVideo.urlShort,
                urlFull: newVideo.urlFull
            };
            //console.log('addVideoData, obj is', obj);
            obj.videosData[newVideoData.id] = newVideoData;
            console.log('obj.videosData', obj.videosData);
            return newVideoData.id;
        }

        function handleDataFromServer(res) {
            obj = res.data;
            obj.videosDataForDisplay = angular.copy(obj.videosData);
            var maxVideoId = 0;
            for (var videoId in obj.videosDataForDisplay) {
                var video = obj.videosDataForDisplay[videoId];

                video.urlShort = $sce.trustAsResourceUrl(video.urlShort + 'api=1&player_id=video'+video.id);
                //video.urlShort = video.urlShort + 'api=1&player_id=video'+video.id;
                //console.log('video.urlShort', video.urlShort);
                video.urlFull = $sce.trustAsResourceUrl(video.urlFull);
                if (+maxVideoId < +video.id) maxVideoId = +video.id;
            }
            //console.log('maxVideoId', maxVideoId);
            nextVideoId = ++maxVideoId;

            return obj;
        }
        function saveToServer() {
            var objToServer = angular.copy(obj);
            delete objToServer.videosDataForDisplay;
            return $http.post('server/server.php', objToServer).then(handleDataFromServer);
        }


        //obj.videosData = obj.videosData.map(function (video) {
        //    video.url = $sce.trustAsResourceUrl(video.url);
        //    return video;
        //});
        //console.log('obj.home', obj.home);

        var prmData = $http.get('server/server.php').then(handleDataFromServer);



        var dataFactory = {

            getDataForPage: function(pageName) {

                return prmData.then(function (res) {
                    //console.log('res', res);
                    var data = res[pageName];
                    data.videosData = [];

                    for (var videoId in res.videosData) {
                        if (!res.videosData.hasOwnProperty(videoId)) continue;
                        var video = res.videosData[videoId];
                        if (pageName === 'home' || video.page === pageName) data.videosData.push(video);
                    }

                    return data;
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
                    saveToServer().then(function (res) {
                        //obj = res.data;
                        return self.getDataForPage(pageName);
                    });

            },

            getVideo: function(videoId) {
                return obj.videosDataForDisplay[videoId];
            },

            // ADMIN METHODS:
            addVideo: function (newVideo) {

                var videoId = addVideoData(newVideo);
                // obj.videosData.push();

                obj.home.videos.push({
                    id: videoId,
                    name: newVideo.personName,
                    role: newVideo.personRole
                });

                console.log('Posting to Server', obj);
                return saveToServer();
            },

            deleteVideo: function (video) {

                var idx;
                obj.home.videos.forEach(function (v, i) {
                    if ( v.id == video.id )  idx = i;
                });


                //var idx = obj.home.videos.indexOf(video);
                console.log('video to delete', video,  ' idx', idx);
                console.log('Before splice', obj.home.videos);

                obj.home.videos.splice(idx, 1)

                //var videos = obj.home.videos.slice();
                //videos.splice(idx, 1);
                //obj.home.videos = videos;

                console.log('After splice', obj.home.videos);

                delete obj.videosData[video.id];
                return saveToServer();
            }
        };
        return dataFactory;

    });








})();



