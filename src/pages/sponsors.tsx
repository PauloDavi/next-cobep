import React from 'react';
import Image from 'next/image';
import { Card, Grid, useTheme } from '@material-ui/core';
import { useTranslation } from '../../i18n';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Organization from '../components/Organization';
import Partners from '../components/Partners';
import TechnicalSupport from '../components/TechnicalSupport';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const theme = useTheme();
  const { t } = useTranslation('sponsors');

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div className="py-5">
        <h1 className="text-gray-600 text-5xl sm:text-8xl text-center mb-5 mt-2">
          {t('SPONSORS_LABEL')}
        </h1>
        <section>
          <motion.div
            animate={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <div className="flex flex-row items-center text-gray-600 ml-4">
              <Image
                src="/images/medals/gold.png"
                alt={t('GOLD_MEDAL_LABEL')}
                height={80}
                width={60}
              />
              <h3 className="ml-4 text-4xl sm:text-5xl">{t('GOLD_LABEL')}</h3>
              <div className="bg-gray-600 h-1 mx-5 rounded-full w-full" />
            </div>
          </motion.div>
          <div className="mx-10 my-5">
            <Grid container spacing={2}>
              <Grid item>
                <motion.div
                  animate={{ y: [-200, 0], opacity: [0, 1] }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                >
                  <a
                    href="https://www.ohmini.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card
                      elevation={5}
                      className="p-5"
                      style={{
                        backgroundColor: theme.palette.background.default,
                      }}
                    >
                      <Image
                        src="/images/sponsors/Ohmini.png"
                        alt="Ohmini"
                        height={100}
                        width={200}
                      />
                    </Card>
                  </a>
                </motion.div>
              </Grid>
              <Grid item>
                <motion.div
                  animate={{ y: [-400, 0], opacity: [0, 1] }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                >
                  <a
                    href="https://www.semikron.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card
                      elevation={5}
                      className="p-5"
                      style={{
                        backgroundColor: theme.palette.background.default,
                      }}
                    >
                      <Image
                        src="/images/sponsors/semikron.png"
                        alt="Semikron"
                        height={100}
                        width={266}
                      />
                    </Card>
                  </a>
                </motion.div>
              </Grid>
            </Grid>
          </div>
        </section>
        <section>
          <motion.div
            animate={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <div className="flex flex-row items-center text-gray-600 ml-4">
              <Image
                src="/images/medals/silver.png"
                alt={t('SILVER_MEDAL_LABEL')}
                height={72}
                width={54}
              />
              <h3 className="ml-4 text-4xl sm:text-5xl">{t('SILVER_LABEL')}</h3>
              <div className="bg-gray-600 h-1 mx-5 rounded-full w-full" />
            </div>
          </motion.div>
          <div className="mx-10 my-5">
            <Grid container spacing={2}>
              <Grid item>
                <motion.div
                  animate={{ y: [-200, 0], opacity: [0, 1] }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                >
                  <a
                    href="https://www.opal-rt.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card
                      elevation={5}
                      className="p-5"
                      style={{
                        backgroundColor: theme.palette.background.default,
                      }}
                    >
                      <Image
                        src="/images/sponsors/OPAL.png"
                        alt="OPAL"
                        height={50}
                        width={270}
                      />
                    </Card>
                  </a>
                </motion.div>
              </Grid>
            </Grid>
          </div>
        </section>
        <section>
          <motion.div
            animate={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ ease: 'easeOut', duration: 2 }}
          >
            <div className="flex flex-row items-center text-gray-600 ml-4">
              <Image
                src="/images/medals/bronze.png"
                alt={t('BRONZE_MEDAL_LABEL')}
                height={64}
                width={48}
              />
              <h3 className="ml-4 text-4xl sm:text-5xl">{t('BRONZE_LABEL')}</h3>
              <div className="bg-gray-600 h-1 mx-5 rounded-full w-full" />
            </div>
          </motion.div>
          <div className="mx-10 my-5">
            <Grid container spacing={2}>
              <Grid item>
                <motion.div
                  animate={{ y: [-200, 0], opacity: [0, 1] }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                >
                  <a
                    href="https://www.rtds.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card
                      elevation={5}
                      className="p-5"
                      style={{
                        backgroundColor: theme.palette.background.default,
                      }}
                    >
                      <Image
                        src="/images/sponsors/RTDS.png"
                        alt="RTDS"
                        height={50}
                        width={138}
                      />
                    </Card>
                  </a>
                </motion.div>
              </Grid>
              <Grid item>
                <motion.div
                  animate={{ y: [-400, 0], opacity: [0, 1] }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                >
                  <a
                    href="https://www.energiasolarphb.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card
                      elevation={5}
                      className="p-5"
                      style={{
                        backgroundColor: theme.palette.background.default,
                      }}
                    >
                      <Image
                        src="/images/sponsors/PHB.png"
                        alt="PHB"
                        height={50}
                        width={82}
                      />
                    </Card>
                  </a>
                </motion.div>
              </Grid>
            </Grid>
          </div>
        </section>
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
      namespacesRequired: ['sponsors', 'common'],
    },
  };
};

export default Sponsors;
