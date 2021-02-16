import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Router from 'next/router';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: 'center',
    },
  })
);

interface Props {
  statusCode: number;
}

const Error: React.FC<Props> = ({ statusCode }) => {
  const classes = useStyles();
  const title = statusCode === 404 ? '404' : 'Error';

  return (
    <>
      <Head>{title}</Head>
      <Container className={classes.root}>
        <Typography>{title}</Typography>

        {statusCode === 404
          ? 'The page you are looking for could not be found.'
          : 'An error occurred.'}
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  const statusCode = res ? res.statusCode : 404;

  if (statusCode === 404) {
    if (req.url?.match(/\/$/)) {
      const withoutTrailingSlash = req.url?.substr(0, req.url.length - 1);
      if (res) {
        res.writeHead(303, {
          Location: withoutTrailingSlash,
        });
        res.end();
      } else {
        Router.push(withoutTrailingSlash);
      }
    }
  }

  return {
    props: {
      statusCode,
    },
  };
};

export default Error;
