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
            'Donation' : 'Donate',
            'Our people' : 'Our people',
            'Our partners' : 'Our partners',
            'Name' : 'Name',
            'Phone' : 'Phone',
            'Mail' : 'Email',
            'Company' : 'Company',
            'Address' : 'Address',
            'Subject' : 'Subject',
            'Subject details' : 'Message',
            'Required field': 'Required field',
            'Send' : 'Send',
            'Financial documents' :'Financial documents and certificates',
            'Contact Us': 'To contact us, please fill out your details and we will get back to you shortly',
            'Registration certificate': 'Registration certificate',
            'Proper management permit': 'Proper management permit',
            'Public institute permit': 'Public institute permit',
            'Tax deduction permit': 'Tax deduction permit',
            'VAT certificate': 'VAT certificate',
            'Account bookkeeping certificate': 'Account bookkeeping certificate',
            'Now Its Your Turn': 'Now Its Your Turn',
            'None of this can happen': 'None of this can happen',
            'Without your generous help': 'Without your generous help',
            'Donation Amount': 'Donation Amount',
            'Other Amount': 'Other Amount',
            'Renewable Donation Each Month': 'Renewable Donation Each Month',
            'Payment by': 'Payment by',
            'Donor Details': 'Donor Details',
            'Proceed': 'Proceed',
            'All donations are tax under section 46 of the Income Tax': 'All donations are tax under section 46 of the Income Tax',
            'Bank transfer': 'Bank transfer',
            'International Bank (31) 109 Ashkelon branch': 'International Bank (31) 109 Ashkelon branch',
            'Account Number': 'Account Number',
            'Check': 'Mail a check to:',
            'You can send it to us at': 'You can send it to us at',
            'Dizengoff 50, Apartment 2410, TA': 'Dizengoff 50, Apartment 2410, TA',
            'For more information on the "Nochac"h" organization and Sah"i activities': 'For additional information about Nochah and SAHI',
            'Cooperation, Joining, and Opening of new Grace Patrols': 'Collaborations, joining or opening new squads',
            'Contact us at': 'Contact us at',
            'Or leave a message at': 'Or leave a message at',
            'You are invited to join the Sah"i family': 'You are invited to join the SAHI family',
            'Giving circle activities': 'The circle of giving',
            'Change the face of Israeli society': 'And change the face of the Israeli society',
            'You can donate in two ways - Select J-GIVE or PayPal below and click Proceed. Thanks!': 'You can donate in two ways - Select J-GIVE or PayPal below and click Proceed. Thanks!',
            'Thanks': 'Thanks',
            'This site': 'This site was built with the generous help of wonderful people that contributed funds, time and talent',
            'Barbara': 'Barbara Gervis – The Estelle Friedman Gervis Family Foundation',
            'Ariel': 'Ariel Kotzer – Design and Creative',
            'Or': 'Or Taicher – Director',
            'Tal': 'Tal Keller – Video editing',
            'Nati': 'Nati Amos – Camera',
            'Nurit': 'Nurit Avruch – UX',
            'Misterbit': 'Misterbit – site building',
            'Thank you': 'Thank You!'
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
            'More': 'לסרטון המלא',
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
            'Send' : 'שלח',
            'Financial documents': 'מסמכים כספיים ואישורים',
            'Contact Us': 'ליצירת קשר, אנא מלאו את הפרטים ונחזור אליכם בהקדם',
            'Registration certificate': 'תעודה לרישום עמותה',
            'Proper management permit': 'אישור ניהול תקין',
            'Public institute permit': 'אישור מוסד ציבורי',
            'Tax deduction permit': 'אישור לצורך ניכוי מס',
            'VAT certificate': 'רישום מע\"מ',
            'Account bookkeeping certificate': 'אישור ניהול פנקסי חשבונות',
            'Now Its Your Turn': 'עכשיו אתם',
            'None of this can happen': 'כל זה לא יכול לקרות',
            'Without your generous help': 'בלי עזרתכם הנדיבה',
            'Donation Amount': 'סכום התרומה',
            'Other Amount': 'סכום אחר',
            'Donor Details': 'פרטי המשלם',
            'Renewable Donation Each Month': 'תרומה מתחדשת כל חודש',
            'Payment by': 'תשלום באמצעות',
            'Proceed': 'המשך',
            'All donations are tax under section 46 of the Income Tax': 'כל התרומות מוכרות לצרכי מס לפי סעיף 46 לפקודת מס הכנסה',
            'Bank transfer': 'העברה בנקאית',
            'International Bank (31) 109 Ashkelon branch': 'הבנק הבינלאומי(31) סניף 109 אשקלון',
            'Account Number': 'מספר חשבון',
            'Check': 'המחאה(צ\ק)',
            'You can send it to us at': 'ניתן לשלוח אלינו לכתובת',
            'Dizengoff 50, Apartment 2410, TA': 'דיזנגוף 50, דירה 2410, ת"א',
            'For more information on the "Nochac"h" organization and Sah"i activities': 'למידע נוסף על עמותת נכח ופעילויות סח"י',
            'Cooperation, Joining, and Opening of new Grace Patrols': 'לשיתופי פעולה, הצטרפות ולפתיחת סיירות חדשות',
            'Contact us at': 'פנו אלינו ל',
            'Or leave a message at': 'או השאירו הודעה ב',
            'You are invited to join the Sah"i family': 'אתם מוזמנים להצטרף למשפחת סח"י',
            'Giving circle activities': 'למעגל הנתינה ולפעילות לשינוי',
            'Change the face of Israeli society': 'פני החברה בישראל',
            'You can donate in two ways - Select J-GIVE or PayPal below and click Proceed. Thanks!': 'ניתן לתרום בשתי דרכים – בחרו J-GIVE  או פייפל למטה והקליקו המשך. תודה!',
            'Thanks': 'תודות',
            'This site': 'אתר זה נבנה תודות לעזרתם הנדיבה של אנשים נפלאים שתרמו מכספם, זמנם וכישרונם',
            'Barbara': 'ברברה ג\'רביס- The Estelle Friedman Gervis Family Foundation',
            'Ariel': 'אריאל קוצר- מעצב ומנהל קריאטיב  ',
            'Or': 'אור טייכר- במאי',
            'Tal': 'טל קלר – עורך וידאו',
            'Nati': 'נתי עמוס – צלם',
            'Nurit': 'נורית אברך – חווית משתמש',
            'Misterbit': 'מיסטרביט – בניית האתר',
            'Thank you': 'תודה!'


        });

        var lang = 'he';
        if (localStorage.lang) {
            lang = localStorage.lang;
        }
        $translateProvider.preferredLanguage(lang);
    })
    .filter("nl2br", function($filter) {
        return function(data) {
            if (!data) return data;
            return data.replace(/\n\r?/g, '<br />');
        };
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
            login: function (pass) {
                return $http.post('server/login.php', pass);
            },
            getDataForPage: function(pageName) {

                return prmData.then(function (res) {
                    //console.log('res', res);
                    var data = res[pageName];
                    if (pageName == 'thanks') return;
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



