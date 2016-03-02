(function(){

    'use strict';

    var module = angular.module('myApp.factories', []);

    module.factory('DataFactory', function ($q, $sce) {
        var obj =
        {

            home: {
              videos:   [
                  {
                      url: "https://player.vimeo.com/video/157043566",
                      img: "1",
                      name: "אבי שלום",
                      role: "לידר"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043567",
                      img: "2",
                      name: "משה בלנגה ",
                      role: "לידר"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043568",
                      img: "3",
                      name: "דויד ששון",
                      role: "מנהל"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043569",
                      img: "4",
                      name: "אבי שלום",
                      role: "לידר"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043570",
                      img: "5",
                      name: "משה בלנגה ",
                      role: "לידר"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043571",
                      img: "6",
                      name: "דויד ששון",
                      role: "מנהל"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043572",
                      img: "7",
                      name: "אבי שלום",
                      role: "לידר"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043573",
                      img: "8",
                      name: "משה בלנגה ",
                      role: "לידר"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043574",
                      img: "9",
                      name: "דויד ששון",
                      role: "מנהל"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043575",
                      img: "10",
                      name: "אבי שלום",
                      role: "לידר"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043576",
                      img: "11",
                      name: "משה בלנגה ",
                      role: "לידר"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043577",
                      img: "12",
                      name: "דויד ששון",
                      role: "מנהל"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043578",
                      img: "13",
                      name: "אבי שלום",
                      role: "לידר"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043579",
                      img: "14",
                      name: "משה בלנגה ",
                      role: "לידר"
                  },
                  {
                      url: "https://player.vimeo.com/video/157043580",
                      img: "15",
                      name: "דויד ששון",
                      role: "מנהל"
                  },
              ]
            },

            past: [{}],
            present: {
                pageTitle: "הווה",
                videos: [{url: "", title: "רואי ברמודה"}],
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
            future: [{}],
            people: {
                pageTitle: "אנשים",
                engPageTitle: "people",
                sections: [
                    {
                        title: "האנשים שלנו",
                        engPageTitle: "people",
                        titlePrimary: "אברהם חיון",
                        titleSecondary: 'מנכ"ל סח"י',
                        textPrimaryPeople: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
                        textSecondaryPeople: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ",
                        img: ""
                    },
                    {
                        title: "השותפים שלנו",
                        engPageTitle: "partners",
                        titlePrimary: "אריק גרבלסקי",
                        titleSecondary: 'יו"ר סח"י',
                        textPrimaryPeople: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
                        textSecondaryPeople: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ",
                        img: ""
                    }
                ]
            },
            partners: {
                pageTitle: "שותפים",
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
                        img: ""
                    },
                    {
                        textPrimaryPartners: ' "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. ',
                        img: ""
                    },
                    {
                        textPrimaryPartners: 'סח"י מביאה גישה חדשנית, ״הפוכה״, שיוצרת שותפות עם נוער בסיכון, הלומד לקחת אחריות על עצמו ועל הסביבה דרך נתינה. תהליך זה יוצר שינוי חיובי הן אצל הנער והן בקהילה מסביבו.',
                        img: ""
                    }
                ]
            }
        };


        obj.home.videos = obj.home.videos.map(function (video) {
            video.url = $sce.trustAsResourceUrl(video.url);
            return video;
        });
        console.log('obj.home', obj.home);

        var dataFactory = {

            getDataForPage: function(pageName) {
                return $q(function(resolve, reject) {
                    setTimeout(function() {
                        if (true) {
                            resolve(angular.copy(obj[pageName]));
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
                    return self.getDataForPage(pageName);
                });

            }
        };
        return dataFactory;

    });


})();



