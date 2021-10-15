import React from 'react';

import { useTranslation } from 'next-i18next';

import { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  Card,
  Grid,
  Typography,
  Button,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Speakers = () => {
  const { t } = useTranslation('speakers');

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div className="my-24 max-w-6xl mx-auto">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <div className="flex justify-center items-center">
              <Card elevation={5} className="h-full max-w-lg">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/palestrantes/palestrante1.jpg"
                    alt="Edson Hirokazu Watanabe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Edson Hirokazu Watanabe
                    </Typography>
                    <Typography variant="body2">{t('DESCRIPTION1')}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className="flex justify-center items-center">
              <Card elevation={5} className="h-full max-w-lg">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/palestrantes/palestrante3.jpg"
                    alt="Luiz Antonio de Souza Ribeiro"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Luiz Antonio de Souza Ribeiro
                    </Typography>
                    <Typography variant="body2">{t('DESCRIPTION2')}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className="flex justify-center items-center">
              <Card elevation={5} className="h-full max-w-lg">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/palestrantes/palestrante4.jpg"
                    alt="Petar J. Grbović"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Petar J. Grbović
                    </Typography>
                    <Typography variant="body2">{t('DESCRIPTION3')}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <div className="flex justify-center items-center">
              <Card elevation={5} className="h-full max-w-lg">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/palestrantes/palestrante2.jpg"
                    alt="Frede Blaabjerg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Frede Blaabjerg
                    </Typography>
                    <Typography variant="body2">{t('DESCRIPTION4')}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'header',
      'footer',
      'common',
      'languageSwitcher',
      'speakers',
    ])),
  },
});

export default Speakers;
