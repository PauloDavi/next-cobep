import React from 'react';
import Head from 'next/head';
import {
  Card,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  Button,
} from '@material-ui/core';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import clsx from 'clsx';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    growDiv: {
      flexGrow: 1,
    },
    fontList: {
      fontSize: 18,
    },
    title: {
      width: '100%',
      height: 350,
      backgroundImage: `linear-gradient(to right,  ${theme.palette.primary.main}, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainCobepTitle: {
      width: '100%',
      display: 'flex',
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleFonts: {
      marginLeft: 40,
      display: 'flex',
      color: '#ffffff',
      flexDirection: 'column',
    },
    callForPapera: {
      height: 'auto',
    },
    imageCard: {
      width: '100%',
      height: 380,
      padding: 15,
      display: 'flex',
      flexDirection: 'column',
      color: theme.palette.common.white,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.light,
    },
    mainTitle: {
      fontWeight: 'bold',
      marginTop: 8,
      fontSize: 28,
      [theme.breakpoints.down('xs')]: {
        fontSize: 24,
      },
    },
    subTitle: {
      [theme.breakpoints.down('xs')]: {
        fontSize: 16,
      },
    },
    subsubTitle: {
      [theme.breakpoints.down('xs')]: {
        fontSize: 14,
      },
    },
    body: {
      padding: '20px 0',
    },
    bodyWithPadding: {
      padding: '0 30px',
    },
    secondaryText: {
      fontSize: 24,
    },
    divSecondaryText: {
      height: 'auto',
      padding: '5px 15px',
      backgroundColor: theme.palette.primary.main,
      color: '#ffffff',
      marginTop: 20,
      display: 'flex',
      alignItems: 'center',
      maxWidth: '80%',
      borderRadius: '0 8px 8px 0',
      marginRight: 'auto',
    },
    primaryText: {
      fontSize: 24,
    },
    divPrimaryText: {
      height: 'auto',
      padding: '5px 15px',
      backgroundColor: theme.palette.secondary.main,
      color: '#ffffff',
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center',
      maxWidth: 150,
      borderRadius: '0 8px 8px 0',
      marginRight: 'auto',
    },
    dateText: {
      fontWeight: 'bold',
      textAlign: 'left',
      fontSize: 32,
      marginBottom: 10,
    },
    overflow: {
      'overflow-x': 'hidden',
      'overflow-y': 'hidden',
    },
    firstList: {
      padding: '10px 20px',
      [theme.breakpoints.up('md')]: {
        paddingRight: 15,
      },
    },
    secondList: {
      padding: '10px 20px',
      [theme.breakpoints.up('md')]: {
        paddingLeft: 15,
      },
    },
  })
);

const CallForPaper = () => {
  const { t } = useTranslation('callForPaper');

  const classes = useStyles();

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div className={classes.overflow}>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>

      <div className={classes.title}>
        <motion.div
          animate={{ y: [40, 0], opacity: [0, 1] }}
          transition={{ ease: 'easeOut', duration: 1.5 }}
        >
          <div>
            <div className={classes.mainCobepTitle}>
              <Image
                priority
                src="/images/logo-cobep-2020.png"
                alt="COBEP 2021"
                width={200}
                height={200}
              />
              <div className={classes.titleFonts}>
                <Typography
                  className={classes.mainTitle}
                  variant="h2"
                  align="left"
                  color="inherit"
                >
                  {t('TITLE_LABEL')}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.subsubTitle}
                  align="left"
                  color="inherit"
                >
                  {t('SUBTITLE_LABEL')}
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.titleFonts}>
            <Typography
              variant="h5"
              className={classes.subTitle}
              align="left"
              color="inherit"
            >
              <strong>{t('SUB_SUB_TITLE_LABEL')}</strong>
            </Typography>
          </div>
        </motion.div>
      </div>
      <div className={classes.body}>
        <Grid
          container
          spacing={2}
          className={clsx(classes.callForPapera, classes.bodyWithPadding)}
        >
          <Grid item xs={12} md={8} lg={9} xl={10} className={classes.growDiv}>
            <motion.div
              animate={{ y: [40, 0], opacity: [0, 1] }}
              transition={{ ease: 'easeOut', duration: 1.5 }}
            >
              <div>
                <Typography>{t('DESCRIPTION_TEXT_LABEL')}</Typography>
                <Typography
                  className={classes.mainTitle}
                  variant="h3"
                  color="primary"
                >
                  {t('CALL_FOR_WOKS_LABEL')}
                </Typography>
                <Typography>{t('DESCRIPTION_CALL_LABEL')}</Typography>
                <Typography
                  className={classes.mainTitle}
                  variant="h3"
                  color="primary"
                >
                  {t('CALL_TUTORIAL_LABEL')}
                </Typography>
                <Typography>{t('DESCRIPTION_TUTORIAS_LABEL')}</Typography>
              </div>
              <div className="flex justify-center mt-8 mb-8">
                <a
                  href="https://cobep2021.softaliza.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="contained" color="secondary">
                    {t('SITEM_SUBMIT_BUTTON_LABEL')}
                  </Button>
                </a>
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4} lg={3} xl={2}>
            <motion.div
              animate={{ y: [40, 0], opacity: [0, 1] }}
              transition={{ ease: 'backOut', duration: 1.5 }}
            >
              <Card className={classes.imageCard}>
                <Typography className={classes.dateText} variant="h5">
                  {t('IMPORTANT_DATES_LABEL')}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>{t('TEXT_DATE_1_LABEL')}</strong> {t('DATE_1_LABEL')}
                  <br />
                  <strong>{t('TEXT_DATE_2_LABEL')}</strong>{' '}
                  <s>{t('DATE_2_LABEL')}</s> {t('DATE_2_LABEL_CORRECT')}
                  <br />
                  <strong>{t('TEXT_DATE_4_LABEL')}</strong> {t('DATE_4_LABEL')}
                  <br />
                  <strong>{t('TEXT_DATE_6_LABEL')}</strong> {t('DATE_6_LABEL')}
                  <br />
                  <strong>{t('TEXT_DATE_3_LABEL')}</strong>{' '}
                  <s>{t('DATE_3_LABEL')}</s> {t('DATE_3_LABEL_CORRECT')}
                  <br />
                  <strong>{t('TEXT_DATE_5_LABEL')}</strong> {t('DATE_5_LABEL')}
                  <br />
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
        <motion.div
          animate={{ y: [40, 0], opacity: [0, 1] }}
          transition={{ ease: 'easeOut', duration: 1.5 }}
        >
          <div className={classes.divSecondaryText}>
            <Typography className={classes.primaryText} variant="h4">
              {t('TOPIC_TITLE_LABEL')}
            </Typography>
          </div>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
          variants={list}
          className={clsx(classes.fontList, 'list-inside list-disc')}
        >
          <Grid container>
            <Grid item className={classes.firstList} xs={12} md={6}>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 2 }}
              >
                {t('TOPIC_1_LABEL')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 2.2 }}
              >
                {t('TOPIC_2_LABEL')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 2.4 }}
              >
                {t('TOPIC_3_LABEL')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 2.6 }}
              >
                {t('TOPIC_4_LABEL')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 2.8 }}
              >
                {t('TOPIC_5_LABEL')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 3 }}
              >
                {t('TOPIC_6_LABEL')}
              </motion.li>
            </Grid>
            <Grid className={classes.secondList} item xs={12} md={6}>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 3.2 }}
              >
                {t('TOPIC_7_LABEL')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 3.4 }}
              >
                {t('TOPIC_8_LABEL')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 3.6 }}
              >
                {t('TOPIC_9_LABEL')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 3.8 }}
              >
                {t('TOPIC_10_LABEL')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 4 }}
              >
                {t('TOPIC_11_LABEL')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 4.2 }}
              >
                {t('TOPIC_12_LABEL')}
              </motion.li>
            </Grid>
          </Grid>
        </motion.ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'header',
      'footer',
      'common',
      'languageSwitcher',
      'callForPaper',
    ])),
  },
});

export default CallForPaper;
