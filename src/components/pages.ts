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
        menuTitleTranslate: 'HOW_WILL_THE_BE',
        pageURL: '/how-will-the-be',
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
        menuTitleTranslate: 'TECHNICAL_PROGRAM_ONLINE_SESSION',
        pageURL: '/technical-program-online_session',
      },
      {
        menuTitleTranslate: 'TECHNICAL_PROGRAM_POSTER_SESSION',
        pageURL: '/technical-program-poster-sessions',
      },
      {
        menuTitleTranslate: 'Energy Summit',
        pageURL: '/energy-summit',
      },
      {
        menuTitleTranslate: 'schnaPYs',
        pageURL: '/schna-pys',
      },
      {
        menuTitleTranslate: 'Wie PELS Breakfast',
        pageURL: '/ieee-pels-wie-breakfast',
      },
    ],
  },
  {
    menuTitleTranslate: 'FAQ_LABEL',
    pageURL: '/faq',
  },
];

export default pages;
