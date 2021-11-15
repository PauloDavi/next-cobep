import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ImageList, ImageListItem, useMediaQuery } from '@material-ui/core';
import picturesJson from '../components/pictures.json';

interface PicturesProps {
  pictures: typeof picturesJson;
}

const Pictures = ({ pictures }: PicturesProps) => {
  const { t } = useTranslation('pictures');

  const matches = useMediaQuery('(min-width:900px)');
  const minMatches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div className="max-w-5xl mx-auto my-8 px-8">
        <h1 className="mt-24 font-bold text-5xl text-center">
          {t('PAGE_TITLE_LABEL')}
        </h1>
        <div className="mt-8">
          <ImageList cols={matches ? 3 : minMatches ? 2 : 1} rowHeight="auto">
            {pictures.map((item) => (
              <ImageListItem key={item.fileid}>
                <Image
                  src={item.largepreview}
                  alt={item.largepreview}
                  width="450"
                  height="300"
                  layout="responsive"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      pictures: picturesJson,
      ...(await serverSideTranslations(locale as string, [
        'header',
        'pictures',
        'footer',
        'common',
        'languageSwitcher',
      ])),
    },
  };
};

export default Pictures;
