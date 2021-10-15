import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from 'next/document';

import { ServerStyleSheets } from '@material-ui/core/styles';

import theme from '../styles/theme';

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            rel="alternate"
            href="https://pro-cobeb.vercel.app/"
            hrefLang="pt"
          />
          <link
            rel="alternate"
            href="https://pro-cobeb.vercel.app/es"
            hrefLang="es"
          />
          <link
            rel="alternate"
            href="https://pro-cobeb.vercel.app/en"
            hrefLang="en"
          />
          <link
            rel="alternate"
            href="https://pro-cobeb.vercel.app/"
            hrefLang="pt-default"
          />
          <meta
            name="description"
            content="O Congresso Brasileiro de Eletrônica de Potência (COBEP) é um congresso bienal, patrocinado pela Sociedade Brasileira de Eletrônica de Potência (SOBRAEP)."
          />
          <meta
            name="keywords"
            content="cobep,ufpb,eletrônica de potência,congresso,sg2,ppgee,pels,ias,sobraep,2021,joão pessoa"
          />
          <meta name="robots" content="" />
          <meta name="revisit-after" content="7 day" />
          <meta name="language" content="Portuguese" />
          <meta name="generator" content="N/A" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="google-site-verification"
            content="MO5G_dn7zWCB4dMyORWCaci1RhD7d1x4OdXeNOuTFn0"
          />
          <meta
            name="google-site-verification"
            content="RKqH8dm3R8ekw8SU8UhpMph8yyF3Dt5EEO9kcWfr39A"
          />
          <meta name="author" content="Paulo Davi Alencar de Freitas Araújo" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <base href="/" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

          <noscript id="jss-insertion-point"></noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
