(function(){

    'use strict';

    var module = angular.module('myApp.factories', []);

    module.config(function ($translateProvider) {
        $translateProvider.translations('en', {
            'Past': 'Past',
            'Present': 'Present',
            'Future': 'Future',
            'Giving': 'Giving',
            'People': 'People',
            'Partners': 'Partners',
            'Transparency': 'Transparency',
            'Contact': 'Contact',
            'More': 'More',
            'Add video': 'Add video',
            'Donation' : 'Donation',
            'Our people' : 'Our people',
            'Our partners' : 'Our partners',
            'Name' : 'Name',
            'Phone' : 'Phone',
            'Mail' : 'Mail',
            'Company' : 'Company',
            'Address' : 'Address',
            'Subject' : 'Subject',
            'Subject details' : 'Subject details',
            'Required field': 'Required field',
            'Send' : 'Send'
        });
        $translateProvider.translations('he', {
            'Past': 'עבר',
            'Present': 'הווה',
            'Future': 'עתיד',
            'Giving': 'נתינה',
            'People': 'אנשים',
            'Partners': 'שותפים',
            'Transparency': 'שקיפות',
            'Contact': 'קשר',
            'More': 'עוד',
            'Add video': 'הוסף וידאו',
            'Donation' : 'תרומה',
            'Our people': 'האנשים שלנו',
            'Our partners': 'השותפים שלנו',
            'Name' : 'שם',
            'Phone' : 'טלפון',
            'Mail' : 'מייל',
            'Company' : 'חברה/ארגון',
            'Address' : 'כתובת',
            'Subject' : 'נושא',
            'Subject details' : 'תוכן הפנייה',
            'Required field': 'שדה חובה',
            'Send' : 'שלח'



        });

        var lang = 'he';
        if (localStorage.lang) {
            lang = localStorage.lang;
        }
        $translateProvider.preferredLanguage(lang);
    });
    module.factory('DataFactory', function ($q, $sce, $http, $translate) {
        var obj = {};
        var nextVideoId;
        var prmData;

        function getDataFromServer() {
            prmData = $http.get(getServerUrl()).then(handleDataFromServer);
        }

        function getServerUrl() {
            var u = 'server/server.php';
            if (dataFactory.lang) u += '?lang=' + dataFactory.lang;
            return u;
        }


        function handleDataFromServer(res) {
            obj = res.data;
            obj.videosDataForDisplay = angular.copy(obj.videosData);
            var maxVideoId = 0;
            for (var videoId in obj.videosDataForDisplay) {
                var video = obj.videosDataForDisplay[videoId];

                video.urlShort = $sce.trustAsResourceUrl(video.urlShort + 'api=1&player_id=video'+video.id);
                video.urlFull = $sce.trustAsResourceUrl(video.urlFull);
                if (maxVideoId < video.id) maxVideoId = video.id;
            }
            nextVideoId = ++maxVideoId;
            return obj;
        }
        function saveToServer(pageName) {
            var objToServer = angular.copy(obj);
            delete objToServer.home.videos;
            if (pageName && pageName !== 'home') delete objToServer[pageName].videos;
            delete objToServer.videosDataForDisplay;
            prmData = $http.post(getServerUrl(), objToServer).then(handleDataFromServer);
            return prmData;
        }


        function addVideoData(newVideo) {

            var newVideoData = {
                id: nextVideoId++,
                page: newVideo.page,
                urlShort: newVideo.urlShort,
                urlFull: newVideo.urlFull,
                name: newVideo.personName,
                role: newVideo.personRole
            };
            obj.videosData[newVideoData.id] = newVideoData;
            console.log('obj.videosData', obj.videosData);
            return newVideoData.id;
        }


        var dataFactory = {
            lang: 'he',

            changeLang: function (lang) {
                localStorage.lang = lang;
                $translate.use(lang);
                //dataFactory.lang = lang;
                //getDataFromServer();
            },
            sendContact: function (contact) {
                return $http.post('server/sendContact.php', contact);
            },
            getDataForPage: function(pageName) {

                return prmData.then(function (res) {
                    //console.log('res', res);
                    var data = res[pageName];
                    data.videos = [];

                    var videosArr = Object.keys(res.videosData).map(function (videoId) {return res.videosData[videoId]});
                    videosArr.sort(function(a,b) {return (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0);} );

                    //console.log('videosArr', videosArr);
                    data.videos = videosArr.filter(function (video) {
                        return (pageName === 'home' || video.page === pageName);
                    });

                    return data;
                });

            },

            updatePage: function(pageName, data) {
                var self = this;
                if (pageName === 'home') {
                    data.videos.forEach(function (v, i) {
                        obj.videosData[v.id].order = i+1;
                    });
                }

                obj[pageName] = data;
                console.log('POSTING TO SERVER');
                return saveToServer(pageName).then(function (res) {
                    return self.getDataForPage(pageName);
                });

            },

            getVideo: function(videoId) {
                return obj.videosDataForDisplay[videoId];
            },

            // ADMIN METHODS:
            addVideo: function (newVideo) {

                var videoId = addVideoData(newVideo);
                console.log('Posting to Server', obj);
                return saveToServer().then(function () {
                    return dataFactory.getDataForPage('home');
                });
            },

            deleteVideo: function (video) {
                delete obj.videosData[video.id];
                return saveToServer().then(function () {
                    return dataFactory.getDataForPage('home');
                });
            }
        };
        if (localStorage.lang) dataFactory.lang = localStorage.lang;

        getDataFromServer();

        return dataFactory;

    });


})();



