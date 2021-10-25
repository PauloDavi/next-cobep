import React from 'react';

import { useTranslation } from 'next-i18next';

import { GetStaticProps } from 'next';
import Head from 'next/head';
// import {
//   Card,
//   Grid,
//   Typography,
//   Button,
//   CardActionArea,
//   CardMedia,
//   CardContent,
// } from '@material-ui/core';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SpeakersItem, SpeakersItemProps } from '../components/SpeakersItem';

const spearks: SpeakersItemProps[] = [
  {
    title: 'TITLE1',
    name: 'Edson Hirokazu Watanabe',
    image: '/images/palestrantes/Watanabe.png',
    abstract: 'ABSTRACT1',
    biography: 'DESCRIPTION1',
  },
  {
    title: 'TITLE2',
    name: 'Luiz Antonio de Souza Ribeiro',
    image: '/images/palestrantes/Luis.png',
    abstract: 'ABSTRACT2',
    biography: 'DESCRIPTION2',
  },
  {
    title: 'TITLE3',
    name: 'Petar J. Grbović',
    image: '/images/palestrantes/Petar.png',
    abstract: 'ABSTRACT3',
    biography: 'DESCRIPTION3',
  },
  {
    title: 'TITLE4',
    name: 'Frede Blaabjerg',
    image: '/images/palestrantes/Frede.png',
    abstract: 'ABSTRACT4',
    biography: 'DESCRIPTION4',
  },
];

const Speakers = () => {
  const { t } = useTranslation('speakers');

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div className="my-24 max-w-6xl mx-auto">
        {spearks.map(({ title, name, image, abstract, biography }) => (
          <SpeakersItem
            key={title}
            title={t(title)}
            name={t(name)}
            image={image}
            abstract={t(abstract)}
            biography={t(biography)}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'header',
      'footer',
      'common',
      'languageSwitcher',
      'speakers',
    ])),
  },
});

export default Speakers;
