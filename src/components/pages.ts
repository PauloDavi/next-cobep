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
    menuTitleTranslate: 'FAQ_LABEL',
    pageURL: '/faq',
  },
];

export default pages;
