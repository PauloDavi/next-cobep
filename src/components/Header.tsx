import React, { useState } from 'react';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import MyMenu from './MyMenu';

import Image from 'next/image';
import Link from 'next/link';

import LanguageSwitcher from './LanguageSwitcher';

import { useRouter } from 'next/router';
import { useTranslation } from '../../i18n';

import pages from './pages';
import { GetStaticProps } from 'next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 64,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 56,
      },
    },
    toolBar: { boxShadow: theme.shadows[19] },
    title: {
      width: 'auto',
      marginLeft: 10,
      fontSize: 24,
      fontWeight: 'bold',
      letterSpacing: -1,
      [theme.breakpoints.down('sm')]: {
        flexGrow: 1,
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
      },
    },
    show: {
      transform: 'translateY(0)',
      transition: 'transform .5s',
    },
    hide: {
      transform: 'translateY(-110%)',
      transition: 'transform .5s',
    },
    headerOptions: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-evenly',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    pageButtons: {
      display: 'flex',
      alignItems: 'center',
    },
    accordion: {
      border: '0 solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
    },
    accordionDetails: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0 10px 0 10px',
      justifyContent: 'start',
    },
    lngSwitch: {
      margin: 'auto 20px auto 0',
    },
  })
);

const Header = () => {
  const { t } = useTranslation('header');

  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const trigger = useScrollTrigger();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleButtonClick = (pageURL: string) => {
    router.push(pageURL);
  };

  return (
    <div className={classes.root}>
      <AppBar
        className={trigger ? classes.hide : classes.show}
        color="secondary"
      >
        <Toolbar className={classes.toolBar}>
          <Image
            priority
            src="/images/logo-cobep-2020.png"
            alt="COBEP"
            width={50}
            height={50}
          />
          <Typography variant="h1" className={classes.title}>
            COBEP 2021
          </Typography>
          {isMobile ? (
            <>
              <div className={classes.lngSwitch}>
                <LanguageSwitcher />
              </div>

              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={() => setMenuIsOpen(true)}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={menuIsOpen}
                onClose={() => setMenuIsOpen(false)}
              >
                <div role="presentation">
                  {pages.map((item) => {
                    if (item.children) {
                      return (
                        <Accordion
                          className={classes.accordion}
                          key={item.menuTitleTranslate}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreOutlinedIcon />}
                          >
                            <Typography>
                              {t(item.menuTitleTranslate)}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails
                            className={classes.accordionDetails}
                          >
                            {item.children.map((e) => (
                              <List key={e.menuTitleTranslate}>
                                <ListItem button>
                                  <ListItemText
                                    onClick={() => {
                                      setMenuIsOpen(false);
                                      handleButtonClick(e.pageURL);
                                    }}
                                    primary={t(e.menuTitleTranslate)}
                                  />
                                </ListItem>
                              </List>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                      );
                    } else {
                      return (
                        <List key={item.menuTitleTranslate}>
                          <ListItem button>
                            <ListItemText
                              onClick={() => {
                                setMenuIsOpen(false);
                                handleButtonClick(item.pageURL);
                              }}
                              primary={t(item.menuTitleTranslate)}
                            />
                          </ListItem>
                        </List>
                      );
                    }
                  })}
                </div>
              </Drawer>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <>
                {pages.map((page) => {
                  const { menuTitleTranslate, pageURL, children } = page;

                  if (children) {
                    return (
                      <div key={menuTitleTranslate}>
                        <MyMenu menuTitleTranslate={menuTitleTranslate}>
                          {children}
                        </MyMenu>
                      </div>
                    );
                  } else {
                    return (
                      <Link href={pageURL || '/'}>
                        <Button
                          key={menuTitleTranslate}
                          variant="text"
                          color="inherit"
                        >
                          {t(menuTitleTranslate)}
                        </Button>
                      </Link>
                    );
                  }
                })}
              </>
              <LanguageSwitcher />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['header', 'common'],
    },
  };
};

export default Header;
