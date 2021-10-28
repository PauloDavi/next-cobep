const pages = [
  {
    menuTitleTranslate: 'HOME_LABEL',
    pageURL: '/',
  },
  {
    menuTitleTranslate: 'REGISTRATIONS_LABEL',
    pageURL: '/registrations',
  },
  {
    menuTitleTranslate: 'REVIEWING_AUTHORS_LABEL',
    children: [
      {
        menuTitleTranslate: 'CALL_FOR_PAPERS_LABEL',
        pageURL: '/call-for-paper',
      },
      {
        menuTitleTranslate: 'DATE_LABEL',
        pageURL: '/dates',
      },
      {
        menuTitleTranslate: 'MODELOS_LABEL',
        pageURL: '/models',
      },
      {
        menuTitleTranslate: 'SUBMISSIONS_LABEL',
        pageURL: '/submissions',
      },
    ],
  },
  {
    menuTitleTranslate: 'TECHNICAL_SUPPORT_LABEL',
    pageURL: '/technical-support',
  },
  {
    menuTitleTranslate: 'SPONSORS_LABEL',
    pageURL: '/sponsors',
  },
  {
    menuTitleTranslate: 'HOTEL_LABEL',
    pageURL: '/hotel',
  },
  {
    menuTitleTranslate: 'SCHEDULE_LABEL',
    children: [
      {
        menuTitleTranslate: 'FULL_SCHEDULE_LABEL',
        pageURL: '/schedule',
      },
      {
        menuTitleTranslate: 'SPEAKERS_LABEL',
        pageURL: '/speakers',
      },
      {
        menuTitleTranslate: 'TUTORIALS_LABEL',
        pageURL: '/tutorials',
      },
      {
        menuTitleTranslate: 'Energy Summit',
        pageURL: 'https://www.sympla.com.br/energy-summit-2021__1373806',
      },
      {
        menuTitleTranslate: 'schnaPYs',
        pageURL: 'https://bit.ly/yp-cobep2021',
      },
      {
        menuTitleTranslate: 'Wie PELS Breakfast',
        pageURL: 'https://bit.ly/WIEbreakfast',
      },
    ],
  },
  {
    menuTitleTranslate: 'FAQ_LABEL',
    pageURL: '/faq',
  },
];

export default pages;
