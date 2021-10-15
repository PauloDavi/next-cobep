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
    index: 0,
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
    menuTitleTranslate: 'SPEAKERS_LABEL',
    pageURL: '/speakers',
  },
  {
    menuTitleTranslate: 'FAQ_LABEL',
    pageURL: '/faq',
  },
];

export default pages;
