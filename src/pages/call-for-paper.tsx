import React from 'react';
import Head from 'next/head';
import {
  Card,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { TFunction } from 'next-i18next';
import { withTranslation } from '../../i18n';

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
      height: 300,
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
      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
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
    },
    firstList: {
      [theme.breakpoints.up('md')]: {
        paddingRight: 15,
      },
    },
    secondList: {
      [theme.breakpoints.up('md')]: {
        paddingLeft: 15,
      },
    },
  })
);

const Home = ({ t }: { readonly t: TFunction }) => {
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
        <title>{t('pageTitle')}</title>
      </Head>

      <div className={classes.title}>
        <motion.div
          animate={{ y: [-200, 0], opacity: [0, 1] }}
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
                  {t('title')}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={classes.subsubTitle}
                  align="left"
                  color="inherit"
                >
                  {t('subtitle')}
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
              <strong>{t('subsubtitle')}</strong>
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
              animate={{ x: [-200, 0], opacity: [0, 1] }}
              transition={{ ease: 'easeOut', duration: 1.5 }}
            >
              <div>
                <Typography
                  className={classes.mainTitle}
                  variant="h3"
                  color="primary"
                >
                  {t('callOfWorks')}
                </Typography>
                <Typography>{t('descriptionText')}</Typography>
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4} lg={3} xl={2}>
            <motion.div
              animate={{ x: [200, 0], opacity: [0, 1] }}
              transition={{ ease: 'backOut', duration: 1.5 }}
            >
              <Card className={classes.imageCard}>
                <Typography className={classes.dateText} variant="h5">
                  {t('importantDates')}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>{t('textDate1')}</strong> {t('date1')}
                  <br />
                  <strong>{t('textDate2')}</strong> {t('date2')}
                  <br />
                  <strong>{t('textDate3')}</strong> {t('date3')}
                  <br />
                  <strong>{t('textDate4')}</strong> {t('date4')}
                  <br />
                  <strong>{t('textDate5')}</strong> {t('date5')}
                  <br />
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
        <motion.div
          animate={{ x: [-200, 0], opacity: [0, 1] }}
          transition={{ ease: 'easeOut', duration: 1.5 }}
        >
          <div className={classes.divSecondaryText}>
            <Typography className={classes.primaryText} variant="h4">
              {t('topicTitle')}
            </Typography>
          </div>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
          variants={list}
          className={classes.fontList}
        >
          <Grid container>
            <Grid item className={classes.firstList} xs={12} md={6}>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 2 }}
              >
                {t('topic1')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 2.2 }}
              >
                {t('topic2')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 2.4 }}
              >
                {t('topic3')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 2.6 }}
              >
                {t('topic4')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 2.8 }}
              >
                {t('topic5')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 3 }}
              >
                {t('topic6')}
              </motion.li>
            </Grid>
            <Grid className={classes.secondList} item xs={12} md={6}>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 3.2 }}
              >
                {t('topic7')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 3.4 }}
              >
                {t('topic8')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 3.6 }}
              >
                {t('topic9')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 3.8 }}
              >
                {t('topic10')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 4 }}
              >
                {t('topic11')}
              </motion.li>
              <motion.li
                variants={item}
                transition={{ ease: 'anticipate', duration: 4.2 }}
              >
                {t('topic12')}
              </motion.li>
            </Grid>
          </Grid>
        </motion.ul>
      </div>
    </div>
  );
};
Home.getInitialProps = async () => ({
  namespacesRequired: ['home', 'common'],
});

export default withTranslation('home')(Home);
