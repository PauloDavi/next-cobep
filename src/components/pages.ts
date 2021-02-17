const pages = [
  {
    menuTitleTranslate: 'inicio',
    pageURL: '/',
  },
  {
    menuTitleTranslate: 'O Congresso',
    pageURL: '/call-for-paper',
  },
  {
    menuTitleTranslate: 'Autores/Revisores',
    index: 0,
    children: [
      {
        menuTitleTranslate: 'Dates',
        pageURL: '/',
      },
      {
        menuTitleTranslate: 'Modelos',
        pageURL: '/',
      },
    ],
  },
  {
    menuTitleTranslate: 'Programacao',
    pageURL: '/',
  },
  {
    menuTitleTranslate: 'Patrocinadores',
    pageURL: '/',
  },
  {
    menuTitleTranslate: 'Contato',
    pageURL: '/',
  },
  {
    menuTitleTranslate: 'FAQ',
    pageURL: '/',
  },
];

export default pages;
