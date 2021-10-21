import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Schedule() {
  const { t } = useTranslation('schedule');

  return (
    <>
      <Head>
        <title>{t('TITLE_LABEL')}</title>
      </Head>
      <div className="mx-auto w-full max-w-5xl flex flex-col">Oi</div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'header',
      'footer',
      'common',
      'languageSwitcher',
      'schedule',
    ])),
  },
});

export default Schedule;
