import React from 'react';
import Image from 'next/image';
import { Card, Grid, Typography, useTheme } from '@material-ui/core';
import { useTranslation, withTranslation } from '../../i18n';

const Sponsors = () => {
  const theme = useTheme();
  const { t } = useTranslation('sponsors');

  return (
    <div className="py-5">
      <h1 className="text-gray-600 text-5xl sm:text-8xl text-center mb-5 mt-2">
        Apoiadores
      </h1>
      <section>
        <div className="flex flex-row items-center text-gray-600 ml-4">
          <Image
            src="/images/medals/gold.png"
            alt="Medalha de ouro"
            height={80}
            width={60}
          />
          <h3 className="ml-4 text-4xl sm:text-5xl">Ouro</h3>
          <div className="bg-gray-600 h-1 mx-5 rounded-full w-full" />
        </div>
        <div className="mx-10 my-5">
          <Grid container spacing={2}>
            <Grid item>
              <Card
                elevation={5}
                className="p-5"
                style={{ backgroundColor: theme.palette.background.default }}
              >
                <Image
                  src="/images/sponsors/Ohmini.png"
                  alt="Ohmini"
                  height={100}
                  width={200}
                />
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
      <section>
        <div className="flex flex-row items-center text-gray-600 ml-4">
          <Image
            src="/images/medals/silver.png"
            alt="Medalha de prata"
            height={72}
            width={54}
          />
          <h3 className="ml-4 text-4xl sm:text-5xl">Prata</h3>
          <div className="bg-gray-600 h-1 mx-5 rounded-full w-full" />
        </div>
        <div className="mx-10 my-5">
          <Grid container spacing={2}>
            <Grid item>
              <Card
                elevation={5}
                className="p-5"
                style={{ backgroundColor: theme.palette.background.default }}
              >
                <Image
                  src="/images/sponsors/OPAL.png"
                  alt="OPAL"
                  height={75}
                  width={404}
                />
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
      <section>
        <div className="flex flex-row items-center text-gray-600 ml-4">
          <Image
            src="/images/medals/bronze.png"
            alt="Medalha de bronze"
            height={64}
            width={48}
          />
          <h3 className="ml-4 text-4xl sm:text-5xl">Bronze</h3>
          <div className="bg-gray-600 h-1 mx-5 rounded-full w-full" />
        </div>
        <div className="mx-10 my-5">
          <Grid container spacing={2}>
            <Grid item>
              <Card
                elevation={5}
                className="p-5"
                style={{ backgroundColor: theme.palette.background.default }}
              >
                <Image
                  src="/images/sponsors/RTDS.png"
                  alt="RTDS"
                  height={50}
                  width={138}
                />
              </Card>
            </Grid>
            <Grid item>
              <Card
                elevation={5}
                className="p-5"
                style={{ backgroundColor: theme.palette.background.default }}
              >
                <Image
                  src="/images/sponsors/PHB.png"
                  alt="PHB"
                  height={50}
                  width={82}
                />
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
};

Sponsors.getInitialProps = async () => ({
  namespacesRequired: ['sponsors'],
});

export default withTranslation('sponsors')(Sponsors);
