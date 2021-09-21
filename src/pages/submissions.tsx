import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import YouTube from 'react-youtube';

function Submissions() {
  const { t } = useTranslation('submissions');

  return (
    <>
      <Head>
        <title>{t('TITLE_LABEL')}</title>
      </Head>
      <div className="mx-auto w-full max-w-5xl flex flex-col">
        <h1 className="mt-8 text-2xl font-bold mx-4 lg:mx-0">
          {t('TITLE_LABEL')}
        </h1>

        <div className="video-responsive mt-8">
          <YouTube
            videoId="8K64N9Wd0vM"
            opts={{
              playerVars: {},
            }}
          />
        </div>

        <div className="mt-4 mx-4 lg:mx-0">
          <span className="text-xl">Instruções:</span>

          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: t('INFO') }}
          />
        </div>
      </div>
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
      'submissions',
    ])),
  },
});

export default Submissions;
