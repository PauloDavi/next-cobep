import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Grid } from '@material-ui/core';
import { ScheduleTable, ScheduleTableProps } from '../components/ScheduleTable';

const schedules: ScheduleTableProps[] = [
  {
    title: 'TABLE_0_TITLE_LABEL',
    variant: 'yellow',
    lines: [
      {
        time: 'TABLE_0_TIME_1_LABEL',
        name: 'TABLE_0_NAME_1_LABEL',
      },
      {
        time: 'TABLE_0_TIME_2_LABEL',
        name: 'TABLE_0_NAME_2_LABEL',
      },
      {
        time: 'TABLE_0_TIME_3_LABEL',
        name: 'TABLE_0_NAME_3_LABEL',
      },
      {
        time: 'TABLE_0_TIME_4_LABEL',
        name: 'TABLE_0_NAME_4_LABEL',
      },
      {
        time: 'TABLE_0_TIME_5_LABEL',
        name: 'TABLE_0_NAME_5_LABEL',
      },
    ],
  },
  {
    title: 'TABLE_1_TITLE_LABEL',
    variant: 'blue',
    lines: [
      {
        time: 'TABLE_1_TIME_1_LABEL',
        name: 'TABLE_1_NAME_1_LABEL',
      },
      {
        time: 'TABLE_1_TIME_2_LABEL',
        name: 'TABLE_1_NAME_2_LABEL',
      },
      {
        time: 'TABLE_1_TIME_3_LABEL',
        name: 'TABLE_1_NAME_3_LABEL',
      },
    ],
  },
  {
    title: 'TABLE_2_TITLE_LABEL',
    variant: 'yellow',
    lines: [
      {
        time: 'TABLE_2_TIME_1_LABEL',
        name: 'TABLE_2_NAME_1_LABEL',
      },
      {
        time: 'TABLE_2_TIME_2_LABEL',
        name: 'TABLE_2_NAME_2_LABEL',
      },
      {
        time: 'TABLE_2_TIME_3_LABEL',
        name: 'TABLE_2_NAME_3_LABEL',
      },
      {
        time: 'TABLE_2_TIME_4_LABEL',
        name: 'TABLE_2_NAME_4_LABEL',
      },
      {
        time: 'TABLE_2_TIME_5_LABEL',
        name: 'TABLE_2_NAME_5_LABEL',
      },
      {
        time: 'TABLE_2_TIME_6_LABEL',
        name: 'TABLE_2_NAME_6_LABEL',
      },
      {
        time: 'TABLE_2_TIME_7_LABEL',
        name: 'TABLE_2_NAME_7_LABEL',
      },
      {
        time: 'TABLE_2_TIME_8_LABEL',
        name: 'TABLE_2_NAME_8_LABEL',
      },
      {
        time: 'TABLE_2_TIME_9_LABEL',
        name: 'TABLE_2_NAME_9_LABEL',
      },
    ],
  },
  {
    title: 'TABLE_3_TITLE_LABEL',
    variant: 'blue',
    lines: [
      {
        time: 'TABLE_3_TIME_1_LABEL',
        name: 'TABLE_3_NAME_1_LABEL',
      },
      {
        time: 'TABLE_3_TIME_2_LABEL',
        name: 'TABLE_3_NAME_2_LABEL',
      },
      {
        time: 'TABLE_3_TIME_3_LABEL',
        name: 'TABLE_3_NAME_3_LABEL',
      },
      {
        time: 'TABLE_3_TIME_4_LABEL',
        name: 'TABLE_3_NAME_4_LABEL',
      },
      {
        time: 'TABLE_3_TIME_5_LABEL',
        name: 'TABLE_3_NAME_5_LABEL',
      },
      {
        time: 'TABLE_3_TIME_6_LABEL',
        name: 'TABLE_3_NAME_6_LABEL',
      },
      {
        time: 'TABLE_3_TIME_7_LABEL',
        name: 'TABLE_3_NAME_7_LABEL',
      },
      {
        time: 'TABLE_3_TIME_8_LABEL',
        name: 'TABLE_3_NAME_8_LABEL',
      },
      {
        time: 'TABLE_3_TIME_9_LABEL',
        name: 'TABLE_3_NAME_9_LABEL',
      },
    ],
  },
  {
    title: 'TABLE_4_TITLE_LABEL',
    variant: 'yellow',
    lines: [
      {
        time: 'TABLE_4_TIME_1_LABEL',
        name: 'TABLE_4_NAME_1_LABEL',
      },
      {
        time: 'TABLE_4_TIME_2_LABEL',
        name: 'TABLE_4_NAME_2_LABEL',
      },
      {
        time: 'TABLE_4_TIME_3_LABEL',
        name: 'TABLE_4_NAME_3_LABEL',
      },
      {
        time: 'TABLE_4_TIME_4_LABEL',
        name: 'TABLE_4_NAME_4_LABEL',
      },
      {
        time: 'TABLE_4_TIME_5_LABEL',
        name: 'TABLE_4_NAME_5_LABEL',
      },
      {
        time: 'TABLE_4_TIME_6_LABEL',
        name: 'TABLE_4_NAME_6_LABEL',
      },
      {
        time: 'TABLE_4_TIME_7_LABEL',
        name: 'TABLE_4_NAME_7_LABEL',
      },
      {
        time: 'TABLE_4_TIME_8_LABEL',
        name: 'TABLE_4_NAME_8_LABEL',
      },
    ],
  },
];

function Schedule() {
  const { t } = useTranslation('schedule');

  const translatedSchedules = schedules.map((schedule) => ({
    title: t(schedule.title),
    variant: schedule.variant,
    lines: schedule.lines.map((line) => ({
      time: t(line.time),
      name: t(line.name),
    })),
  }));

  return (
    <>
      <Head>
        <title>{t('TITLE_LABEL')}</title>
      </Head>
      <div className="mx-auto w-full max-w-5xl flex my-8 flex-col">
        <h1 className="text-center my-8 font-bold text-4xl">
          {t('TITLE_LABEL')}
        </h1>
        <Grid container spacing={2}>
          {translatedSchedules.map(({ title, lines, variant }) => (
            <ScheduleTable
              key={title}
              title={title}
              lines={lines}
              variant={variant}
            />
          ))}
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
      'schedule',
    ])),
  },
});

export default Schedule;
