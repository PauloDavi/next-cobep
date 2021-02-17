import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { GetStaticProps } from 'next';
import Router from 'next/router';
import NProgress from 'nprogress';
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

import { appWithTranslation } from '../../i18n';
import { Tooltip } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import theme from '../styles/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import jssExtend from 'jss-plugin-extend';
import rtl from 'jss-rtl';

import '../styles/globals.css';

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend(), rtl()],
});

const generateClassName = createGenerateClassName();

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
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
          <Component {...pageProps} key={router.route} />
          <Footer key="footer" />
          <ScrollToTop style={{ bottom: 0, right: 30 }} showUnder={160}>
            <Tooltip title="Voltar ao inicio">
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['common'],
    },
  };
};

export default appWithTranslation(MyApp);
