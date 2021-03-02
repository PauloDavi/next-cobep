import React from 'react';
import {
  Container,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core';

import Image from 'next/image';

import Head from 'next/head';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: '5vw',
    },
    img: {
      width: '60vw',
      marginTop: 20,
    },
  })
);

const Page404 = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>404 - pagina não encontrada</title>
      </Head>
      <Container className={classes.root}>
        <Typography className={classes.text}>Pagina não encontrada</Typography>
        <Image
          priority
          src="/images/page_not_found.svg"
          alt="404"
          className={classes.img}
          layout="fill"
        />
      </Container>
    </>
  );
};

export default Page404;
