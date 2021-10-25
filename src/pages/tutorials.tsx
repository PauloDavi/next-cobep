import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { TutorialItem } from '../components/TutorialItem';
import { Grid } from '@material-ui/core';

const tutorials = [
  {
    title: 'TITLE_2_LABEL',
    time: 'MINISTER_2_LABEL',
    minister: 'TIME_2_LABEL',
    duration: 'DURATION_2_LABEL',
    description: 'DESCRIPTION_2_LABEL',
  },
  {
    title: 'TITLE_3_LABEL',
    time: 'MINISTER_3_LABEL',
    minister: 'TIME_3_LABEL',
    duration: 'DURATION_3_LABEL',
    description: 'DESCRIPTION_3_LABEL',
  },
  {
    title: 'TITLE_4_LABEL',
    time: 'MINISTER_4_LABEL',
    minister: 'TIME_4_LABEL',
    duration: 'DURATION_4_LABEL',
    description: 'DESCRIPTION_4_LABEL',
  },
  {
    title: 'TITLE_5_LABEL',
    time: 'MINISTER_5_LABEL',
    minister: 'TIME_5_LABEL',
    duration: 'DURATION_5_LABEL',
    description: 'DESCRIPTION_5_LABEL',
  },
  {
    title: 'TITLE_6_LABEL',
    time: 'MINISTER_6_LABEL',
    minister: 'TIME_6_LABEL',
    duration: 'DURATION_6_LABEL',
    description: 'DESCRIPTION_6_LABEL',
  },
  {
    title: 'TITLE_1_LABEL',
    time: 'MINISTER_1_LABEL',
    minister: 'TIME_1_LABEL',
    duration: 'DURATION_1_LABEL',
    description: 'DESCRIPTION_1_LABEL',
  },
];

function Tutorials() {
  const { t } = useTranslation('tutorials');

  return (
    <>
      <Head>
        <title>{t('TITLE_LABEL')}</title>
      </Head>
      <div className="mx-auto w-full max-w-5xl my-8 flex flex-col">
        <Grid container className="px-8" spacing={2}>
          {tutorials.map(
            ({ title, minister, time, duration, description }, index) => (
              <TutorialItem
                index={index}
                key={title}
                title={t(title)}
                minister={t(minister)}
                time={t(time)}
                duration={t(duration)}
                description={t(description)}
              />
            )
          )}
        </Grid>
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
      'tutorials',
    ])),
  },
});

export default Tutorials;
