import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  IconButton,
  Link,
  Hidden,
} from '@material-ui/core';

import clsx from 'clsx';

import Image from 'next/image';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { motion } from 'framer-motion';

import { withTranslation } from '../../i18n';
import { TFunction } from 'next-i18next';
import { GetStaticProps } from 'next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainDiv: {
      boxShadow: theme.shadows[19],
      backgroundImage: `linear-gradient(to right,  ${theme.palette.primary.main}, ${theme.palette.primary.dark}, ${theme.palette.secondary.main})`,
    },
    separator: {
      height: 5,
      width: 'full',
      backgroundColor: '#ffffff',
    },
    flexRow: {
      display: 'flex',
    },
    alignCenterBetween: {
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    alignCenter: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    textLabel: {
      marginRight: 5,
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    contactUsTextBold: {
      fontWeight: 'bold',
      fontSize: 24,
      color: '#ffffff',
    },
    contactUsText: {
      fontSize: 14,
      color: '#ffffff',
    },
    divFooter: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 5,
    },
    divFooterText: {
      display: 'flex',
      marginBottom: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainTitle: {
      color: '#ffffff',
    },
    subsubTitle: {
      color: '#ffffff',
    },
    heightFull: {
      height: 'full',
    },
    footerTextBold: {
      fontWeight: 'bold',
      fontSize: 14,
      [theme.breakpoints.up('sm')]: {
        fontSize: 18,
      },
      color: '#ffffff',
    },
    footerText: {
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
    marginLeft10: {
      marginLeft: 10,
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

const Footer = ({ t }: { readonly t: TFunction }) => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.mainDiv}>
        <motion.div
          animate={{ y: [200, 0], opacity: [0, 1] }}
          transition={{ ease: 'easeOut', duration: 1.5 }}
        >
          <div className={clsx(classes.alignCenterBetween, classes.flexRow)}>
            <div className={classes.flexRow}>
              <Image
                priority
                src="/images/logo-cobep-2020.png"
                alt="COBEP 2021"
                width={150}
                height={150}
              />
              <Hidden xsDown>
                <div
                  className={clsx(
                    classes.flexColumn,
                    classes.alignCenter,
                    classes.marginLeft10
                  )}
                >
                  <Typography
                    className={classes.mainTitle}
                    variant="h2"
                    align="left"
                    color="inherit"
                  >
                    {t('title')}
                  </Typography>
                </div>
              </Hidden>
            </div>
            <div
              className={clsx(classes.heightFull, classes.flexColumn, 'flex')}
            >
              <Typography className={classes.footerTextBold}>
                Contato:
              </Typography>
              <div className={clsx(classes.flexRow, classes.alignCenter)}>
                <Typography
                  className={clsx(
                    classes.contactUsText,
                    classes.contactUsTextBold
                  )}
                >
                  E-mail:
                </Typography>
                <Link
                  className={classes.contactUsText}
                  href="mailto:cobep2021@cear.ufpb.br"
                  target="_blank"
                >
                  cobep2021@cear.ufpb.br
                </Link>
              </div>
              <div className={clsx(classes.flexRow, classes)}>
                <Typography
                  className={clsx(
                    classes.contactUsText,
                    classes.contactUsTextBold
                  )}
                >
                  Fone:
                </Typography>
                <Typography
                  className={clsx(classes.contactUsText, classes.textLabel)}
                >
                  (83) 99999-9999
                </Typography>
              </div>
              <div className="flex flex-row justify-between">
                <IconButton>
                  <Link
                    href="https://www.instagram.com/cobep2021/"
                    target="_blank"
                  >
                    <InstagramIcon className={classes.icons} />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link
                    href="https://www.facebook.com/cobep2021"
                    target="_blank"
                  >
                    <FacebookIcon className={classes.icons} />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link
                    href="https://www.linkedin.com/company/sobraep-associação-brasileira-de-eletrônica-de-potência/"
                    target="_blank"
                  >
                    <LinkedInIcon className={classes.icons} />
                  </Link>
                </IconButton>
              </div>
            </div>
          </div>
        </motion.div>
        <div className={classes.separator}></div>
        <motion.div
          animate={{ y: [200, 0], opacity: [0, 1] }}
          transition={{ ease: 'easeOut', duration: 1.5 }}
        >
          <div className={classes.divFooter}>
            <div className={classes.divFooterText}>
              <Typography className={classes.footerTextBold}>
                {t('title')}
              </Typography>
              <Typography className={classes.footerText}>
                {t('subtitle')}
              </Typography>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['footer'],
    },
  };
};

export default withTranslation('footer')(Footer);
