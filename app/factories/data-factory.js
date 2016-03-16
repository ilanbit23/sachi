(function(){

    'use strict';

    var module = angular.module('myApp.factories', []);

    module.factory('DataFactory', function ($q, $sce) {
        var obj =
        {
            videosData: {
                "1" : {
                    id: "1",
                    page: 'giving',
                    urlShort: "https://player.vimeo.com/video/157043566?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043566?autoplay=1"
                },
                "2" : {
                    id: "2",
                    page: 'past',
                    urlShort: "https://player.vimeo.com/video/157043567?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043567?autoplay=1"
                },
                "3" : {
                    id: "3",
                    page: 'present',
                    urlShort: "https://player.vimeo.com/video/157043568?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043568?autoplay=1"
                },
                "4" : {
                    id: "4",
                    page: 'giving',
                    urlShort: "https://player.vimeo.com/video/157043569?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043569?autoplay=1"
                },
                "5" : {
                    id: "5",
                    page: 'present',
                    urlShort: "https://player.vimeo.com/video/157043570?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043571?autoplay=1"
                },
                "6" : {
                    id: "6",
                    page: 'future',
                    urlShort: "https://player.vimeo.com/video/157043572?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043573?autoplay=1"
                },
                "7" : {
                    id: "7",
                    page: 'present',
                    urlShort: "https://player.vimeo.com/video/157043574?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043574?autoplay=1"
                },
                "8" : {
                    id: "8",
                    page: 'future',
                    urlShort: "https://player.vimeo.com/video/157043575?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043575?autoplay=1"
                },
                "9" : {
                    id: "9",
                    page: 'giving',
                    urlShort: "https://player.vimeo.com/video/157043576?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043576?autoplay=1"
                },
                "10" : {
                    id: "10",
                    page: 'past',
                    urlShort: "https://player.vimeo.com/video/157043577?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043577?autoplay=1"
                },
                "11" : {
                    id: "11",
                    page: 'future',
                    urlShort: "https://player.vimeo.com/video/157043578?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043578?autoplay=1"
                },
                "12" : {
                    id: "12",
                    page: 'past',
                    urlShort: "https://player.vimeo.com/video/157043579?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043579?autoplay=1"
                },
                "13" : {
                    id: "13",
                    page: 'future',
                    urlShort: "https://player.vimeo.com/video/157043580?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043580?autoplay=1"
                },
                "14" : {
                    id: "14",
                    page: 'giving',
                    urlShort: "https://player.vimeo.com/video/157043581?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043581?autoplay=1"
                },
                "15" : {
                    id: "15",
                    page: 'future',
                    urlShort: "https://player.vimeo.com/video/157043582?autoplay=1",
                    urlFull: "https://player.vimeo.com/video/157043582?autoplay=1"
                }
            },

            home: {
              videos:   [
                  {
                      id: "1",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "2",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "3",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "4",
                      name: "אבי שלום",
                      role: "לידר"
                  },
                  {
                      id: "5",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "6",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "7",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "8",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "9",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "10",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "11",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "12",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "13",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "14",
                      name: "אבי שלום",
                      role: "לידר"

                  },
                  {
                      id: "15",
                      name: "אבי שלום",
                      role: "לידר"

                  }
              ]
            },

            past: {
                pageTitle: "עבר",

                sections: [
                    {
                        title: "סיירות החסד",
                        textPrimary: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
                        textSecondary: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקרי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקרי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקרי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקרי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקרי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ",
                    },
                    {
                        title: "מנהיגות",
                        textPrimary: "מנהיגות זה טוב",
                        textSecondary: "איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    },
                    {
                        title: "צוות מלווה",
                        textPrimary: "צוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווה",
                        textSecondary: "צוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווהיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    },
                    {
                        title: "מפת פעילות",
                        textPrimary: "האימפריה שלנו",
                        textSecondary: "איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    }

                ]
            },
            present: {
                pageTitle: "הווה",
                sections: [
                    {
                        title: "סיירות החסד",
                        textPrimary: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
                        textSecondary: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ",
                    },
                    {
                        title: "מנהיגות",
                        textPrimary: "מנהיגות זה טוב",
                        textSecondary: "איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    },
                    {
                        title: "צוות מלווה",
                        textPrimary: "צוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווה",
                        textSecondary: "צוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווהיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    },
                    {
                        title: "מפת פעילות",
                        textPrimary: "מנהיגות זה טוב",
                        textSecondary: "איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    }

                ]
            },
            future: {
                pageTitle: "עתיד",
                sections: [
                    {
                        title: "סיירות החסד",
                        textPrimary: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
                        textSecondary: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ",
                    },
                    {
                        title: "מנהיגות",
                        textPrimary: "מנהיגות זה טוב",
                        textSecondary: "איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    },
                    {
                        title: "צוות מלווה",
                        textPrimary: "צוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווה",
                        textSecondary: "צוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווהיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    },
                    {
                        title: "מפת פעילות",
                        textPrimary: "מנהיגות זה טוב",
                        textSecondary: "איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    }

                ]
            },
            giving: {
                pageTitle: "נתינה",
                videos: [{url: "https://player.vimeo.com/video/157043580", title: "רואי ברמודה"}],
                sections: [
                    {
                        title: "סיירות החסד",
                        textPrimary: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
                        textSecondary: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ",
                    },
                    {
                        title: "מנהיגות",
                        textPrimary: "מנהיגות זה טוב",
                        textSecondary: "איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    },
                    {
                        title: "צוות מלווה",
                        textPrimary: "צוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווה",
                        textSecondary: "צוות מלווהצוות מלווהצוות מלווהצוות מלווהצוות מלווהיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    },
                    {
                        title: "מפת פעילות",
                        textPrimary: "מנהיגות זה טוב",
                        textSecondary: "איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא,"
                    }

                ]
            },
            people: {
                pageTitle: "אנשים",
                engPageTitle: "people",
                sections: [
                    {
                        title: "האנשים שלנו",
                        titlePrimary: "אברהם חיון",
                        titleSecondary: 'מנכ"ל סח"י',
                        textPrimaryPeople: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
                        textSecondaryPeople: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ",
                        img: "img/people.jpg"
                    },
                    {
                        title: "השותפים שלנו",
                        titlePrimary: "אריק גרבלסקי",
                        titleSecondary: 'יו"ר סח"י',
                        textPrimaryPeople: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
                        textSecondaryPeople: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ",
                        img: "img/people.jpg"
                    }
                ]
            },
            partners: {
                pageTitle: "אנשים",
                engPageTitle: "partners",
                sections: [
                    {
                        title: "האנשים שלנו",
                        engPageTitle: "people"
                    },
                    {
                        title: "השותפים שלנו",
                        engPageTitle: "partners"
                    }
                ],
                recommendations: [
                    {
                        textPrimaryPartners: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',

                    },
                    {
                        textPrimaryPartners: ' "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ',
                        img: ""
                    },
                    {
                        textPrimaryPartners: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
                        img: ""
                    }
                ],
                logos: [
                    {
                        id: "1",
                        name: "steinmetz-foundation",
                        url: "http://www.steinmetz-foundation.co.il"
                    },
                    {
                        id: "2",
                        name: "keren hayesod",
                        url: "http://www.kh-uia.org.il/En/Pages/default.aspx"
                    },
                    {
                        id: "3",
                        name: "good people fund",
                        url: "http://www.goodpeoplefund.org/"
                    },
                    {
                        id: "4",
                        name: "tmura",
                        url: "http://www.tmura.org/"
                    },
                    {
                        id: "5",
                        name: "keren azrieli",
                        url: "http://www.azrielifoundation.org.il/"
                    }
                ]
            }
        };


        for (var videoId in obj.videosData) {
            var video = obj.videosData[videoId];
            video.urlShort = $sce.trustAsResourceUrl(video.urlShort + 'api=1&player_id=video'+video.id);
            //video.urlShort = video.urlShort + 'api=1&player_id=video'+video.id;
            //console.log('video.urlShort', video.urlShort);
            video.urlFull = $sce.trustAsResourceUrl(video.urlFull);
        }

        //obj.videosData = obj.videosData.map(function (video) {
        //    video.url = $sce.trustAsResourceUrl(video.url);
        //    return video;
        //});
        //console.log('obj.home', obj.home);

        var dataFactory = {

            getDataForPage: function(pageName) {
                return $q(function(resolve, reject) {
                    setTimeout(function() {
                        if (true) {
                            var data = angular.copy(obj[pageName]);
                            data.videosData = [];
                            for (var videoId in obj.videosData) {
                                if (!obj.videosData.hasOwnProperty(videoId)) continue;
                                var video = obj.videosData[videoId];
                                if (pageName === 'home' || video.page === pageName) data.videosData.push(video);
                            }

                            resolve(data);
                        } else {
                            reject('Cannot load data');
                        }
                    }, 0);
                });

            },

            updatePage: function(pageName, data) {
                var self = this;
                return $q(function(resolve, reject) {
                    obj[pageName] = data;
                    resolve(self.getDataForPage(pageName));
                });

            },

            getVideo: function(videoId) {
                return obj.videosData[videoId];
            }
        };
        return dataFactory;

    });


})();



