/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { useTranslation } from '../../i18n';
import { GetStaticProps } from 'next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divContactUsText: {},
    contactUsTextBold: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#ffffff',
    },
    contactUsText: {
      fontSize: 14,
      color: '#ffffff',
    },
    divOrganization: {
      display: 'flex',
      boxShadow: theme.shadows[19],
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 5,
      backgroundImage: `linear-gradient(to right,  ${theme.palette.primary.main}, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
    },
    divOrganizationText: {
      display: 'flex',
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ORGANIZATION_LABELTextBold: {
      fontWeight: 'bold',
      fontSize: 14,
      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
      color: '#ffffff',
    },
    ORGANIZATION_LABELText: {
      marginLeft: 10,
      fontSize: 14,
      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
      color: '#ffffff',
    },
    divLogos: {
      marginBottom: 10,
      width: '100%',
    },
    icons: {
      color: '#ffffff',
    },
    divSecondaryText: {
      height: 'auto',
      padding: '5px 15px',
      backgroundColor: theme.palette.primary.main,
      color: '#ffffff',
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center',
      maxWidth: 180,
      borderRadius: '0 8px 8px 0',
      marginRight: 'auto',
    },
    secondaryText: {
      fontSize: 24,
    },
  })
);

const Organization = () => {
  const { t } = useTranslation('footerImages');

  const classes = useStyles();

  return (
    <div>
      <motion.div
        animate={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ ease: 'easeOut', duration: 1.5 }}
      >
        <div className={classes.divSecondaryText}>
          <Typography className={classes.secondaryText} variant="h4">
            {t('ORGANIZATION_LABEL')}
          </Typography>
        </div>
      </motion.div>
      <Grid className={classes.divLogos} container spacing={2}>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ x: [-200, 0], opacity: [0, 1] }}
            transition={{ ease: 'easeOut', duration: 1.5 }}
          >
            <Image
              src="/images/logo_UFPB.png"
              alt="Logo UFPB"
              width={70}
              height={100}
            />
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ x: [-400, 0], opacity: [0, 1] }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <Image
              src="/images/logo_CEAR.png"
              alt="Logo Cear"
              width={100}
              height={100}
            />
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ x: [-600, 0], opacity: [0, 1] }}
            transition={{ ease: 'easeOut', duration: 2.5 }}
          >
            <Image
              src="/images/logo_ppge.jpg"
              alt="Logo PPGE"
              width={58.5}
              height={100}
            />
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ x: [-800, 0], opacity: [0, 1] }}
            transition={{ ease: 'easeOut', duration: 3 }}
          >
            <Image
              src="/images/logo_SG2.png"
              alt="Logo SG2"
              width={85}
              height={100}
            />
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['footerImages', 'common'],
    },
  };
};

export default Organization;
