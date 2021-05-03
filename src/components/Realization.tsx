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
    divTechnicalSupport: {
      display: 'flex',
      boxShadow: theme.shadows[19],
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 5,
      backgroundImage: `linear-gradient(to right,  ${theme.palette.primary.main}, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
    },
    divTechnicalSupportText: {
      display: 'flex',
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    organizationTextBold: {
      fontWeight: 'bold',
      fontSize: 14,
      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
      color: '#ffffff',
    },
    organizationText: {
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
      backgroundColor: theme.palette.secondary.main,
      color: '#ffffff',
      marginBottom: 20,
      display: 'flex',
      alignItems: 'center',
      maxWidth: 200,
      borderRadius: '8px 0 0 8px',
      marginLeft: 'auto',
    },
    secondaryText: {
      fontSize: 24,
    },
  })
);

const Realization = () => {
  const { t } = useTranslation('footerImages');

  const classes = useStyles();

  return (
    <div style={{ maxWidth: '100vw' }}>
      <motion.div
        animate={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ ease: 'easeOut', duration: 1.5 }}
      >
        <div className={classes.divSecondaryText}>
          <Typography className={classes.secondaryText} variant="h4">
            {t('REALIZATION_LABEL')}
          </Typography>
        </div>
      </motion.div>
      <Grid
        className={classes.divLogos}
        direction="row-reverse"
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            className="px-10"
            animate={{ y: [40, 0], opacity: [0, 1] }}
            transition={{ ease: 'easeOut', duration: 2.5 }}
          >
            <Image
              src="/images/sobraep.png"
              alt="Logo SOBRAEP"
              layout="intrinsic"
              width={366}
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

export default Realization;
