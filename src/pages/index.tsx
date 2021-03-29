import React from 'react';

import { useTranslation } from '../../i18n';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import {
  Button,
  Card,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';

import Organization from '../components/Organization';
import TechnicalSupport from '../components/TechnicalSupport';

import Image from 'next/image';
import Partners from '../components/Partners';
import { GetStaticProps } from 'next';
import Head from 'next/head';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    shadow: {
      boxShadow: theme.shadows[10],
    },
  })
);

const Home = () => {
  const { t } = useTranslation('index');

  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div
        className="w-full"
        style={{ backgroundColor: 'rgba(255, 153, 0, 0.9)' }}
      >
        <AutoplaySlider
          bullets={false}
          play={true}
          interval={4000}
          animation="cubeAnimation"
        >
          <div
            data-src="/images/parque_da_lagoa.jpg"
            className="flex justify-center items-center"
          >
            <Image src="/images/parque_da_lagoa.jpg" layout="fill" />
            <Typography className="text-white text-4xl">Parques</Typography>
          </div>
          <div
            data-src="/images/topo_hotel_tambau.jpg"
            className="flex justify-center items-center"
          >
            <Image src="/images/topo_hotel_tambau.jpg" layout="fill" />
            <Typography className="text-white text-4xl">Praia</Typography>
          </div>
          <div
            data-src="/images/alvarenga.jpg"
            className="flex justify-center items-center"
          >
            <Image src="/images/alvarenga.jpg" layout="fill" />
            <Typography className="text-white text-4xl">Passeios</Typography>
          </div>
          <div
            data-src="/images/mapa_jampa.jpg"
            className="flex justify-center items-center"
          >
            <Image src="/images/mapa_jampa.jpg" layout="fill" />
            <Typography className="text-white text-4xl">
              Tudo uma beleza
            </Typography>
          </div>
        </AutoplaySlider>
        <div className="px-8 pb-16 pt-5 text-white text-md leading-none">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3">{t('TITLE_LABEL')}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p className="text-xl">{t('DESCRIPTION_FIRST_LABEL')}</p>
              <p className="text-xl mt-5">{t('DESCRIPTION_SECOND_LABEL')}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p className="text-xl">{t('DESCRIPTION_THIRD_LABEL')}</p>
            </Grid>
            <Grid item xs={12}>
              <div className="w-48" />
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-center">
                <a
                  href="https://cobep2021.softaliza.com.br/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    className={classes.shadow}
                    variant="contained"
                    color="secondary"
                  >
                    {t('SITEM_SUBMIT_BUTTON_LABEL')}
                  </Button>
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="mt-10 w-full px-8 py-5 text-white font-bold text-md leading-none">
        <Grid container spacing={2}>
          <Grid className="flex justify-center items-center" item xs={12}>
            <Card
              className={clsx(
                'text-center px-5 pb-8 pt-5 h-full max-w-sm',
                classes.shadow
              )}
            >
              <a
                href="/documents/call_for_paper.pdf"
                download="callForPaper.pdf"
                className="flex justify-center"
              >
                <div className="text-xl text-center mb-5">
                  <Typography variant="h5" color="secondary">
                    {t('CALL_FOR_PAPERS_AND_TUTORIALS_LABEL')}
                  </Typography>
                  <div className="mt-4">
                    <Image
                      className="border-gray-300 border-2 rounded"
                      src="/images/test.jpeg"
                      alt={t('CALL_FOR_PAPERS_AND_TUTORIALS_LABEL')}
                      width={256}
                      height={200}
                    />
                  </div>
                </div>
              </a>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div
        className="flex justify-center mt-10 w-full mb-10 px-8 py-12"
        style={{ backgroundColor: 'rgba(41, 98, 255, 0.8)' }}
      >
        <div className="flex flex-row">
          <Hidden xsDown>
            <div className="py-5 max-w-sm h-96">
              <img
                className="object-cover w-60 h-full rounded-l"
                src="/images/barco.jpg"
                alt="CALL FOR TUTORIALS"
              />
            </div>
          </Hidden>
          <div
            className="bg-white flex flex-col p-5 rounded"
            style={{ maxWidth: 400 }}
          >
            <div className="mb-5">
              <Typography variant="h3">{t('JOAO_PESSOA_LABEL')}</Typography>
            </div>
            <div className="mb-5">
              <Typography variant="body1">
                {t('JOAO_PESSOA_DESCRIPTION_LABEL')}
              </Typography>
            </div>
            <a
              href="https://turismo.joaopessoa.pb.gov.br/um-pouco-da-sua-historia/"
              rel="noreferrer"
              target="_blank"
              style={{ marginTop: 'auto' }}
            >
              <Button color="primary" fullWidth variant="contained">
                <span className="text-white">
                  {t('JOAO_PESSOA_BUTTON_LABEL')}
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Organization />
      <Partners />
      <TechnicalSupport />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['index', 'common'],
    },
  };
};

export default Home;
