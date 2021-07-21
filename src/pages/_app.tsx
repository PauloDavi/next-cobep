import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  ThemeProvider,
  StylesProvider,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
import { create } from 'jss';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from 'react-scroll-up';

import { appWithTranslation, useTranslation } from 'next-i18next';
import { Tooltip } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import theme from '../styles/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';

import '../styles/globals.css';

import Head from 'next/head';

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend(), rtl()],
});

const generateClassName = createGenerateClassName();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          <Header key="header" />
          <CssBaseline key="cssBaseLine" />
          <div key="main" className="mb-auto min-h-screen">
            <Head>
              <title>COBEP</title>
            </Head>
            <Component {...pageProps} />
          </div>
          <Footer key="footer" />
          <ScrollToTop
            key="scroll-button"
            style={{ bottom: 0, right: 30 }}
            showUnder={160}
          >
            <Tooltip title={t('BACK_TO_BEGIN') as string}>
              <div className="bg-gray-800 bg-opacity-75 p-1 rounded-t-md">
                <ExpandLessIcon color="primary" />
              </div>
            </Tooltip>
          </ScrollToTop>
        </AnimatePresence>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default appWithTranslation(MyApp);
