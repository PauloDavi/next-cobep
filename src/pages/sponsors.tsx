import React from 'react';
import Image from 'next/image';
import { Card, Grid, useTheme } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Organization from '../components/Organization';
import Partners from '../components/Partners';
import TechnicalSupport from '../components/TechnicalSupport';
import { motion } from 'framer-motion';
import Realization from '../components/Realization';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
                alt={t('GOLD_MEDAL_LABEL') as string}
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
                    href="https://www.alsolenergia.com.br/"
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
                        src="/images/sponsors/alsol.png"
                        alt="ALSOL"
                        height={100}
                        width={313}
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
              <Grid item>
                <motion.div
                  animate={{ y: [-200, 0], opacity: [0, 1] }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                >
                  <a
                    href="https://delorenzo.com.br"
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
                        src="/images/sponsors/LOGO_DE_LORENZO.png"
                        alt="De Lorenzo"
                        height={100}
                        width={452}
                      />
                    </Card>
                  </a>
                </motion.div>
              </Grid>
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
                  animate={{ y: [-200, 0], opacity: [0, 1] }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                >
                  <a
                    href="https://www.typhoon-hil.com/"
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
                        src="/images/sponsors/Typhoon-HIL.png"
                        alt="Typhoon HIL"
                        height={100}
                        width={132}
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
                alt={t('SILVER_MEDAL_LABEL') as string}
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
              <Grid item>
                <motion.div
                  animate={{ y: [-400, 0], opacity: [0, 1] }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                >
                  <a
                    href="https://www.bksv.com/pt"
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
                        src="/images/sponsors/HBK_Primary_RGB_Dark_Blue.png"
                        alt="PHB"
                        height={50}
                        width={145}
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
                    href="https://institucional.taesa.com.br/"
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
                        src="/images/sponsors/taesa.png"
                        alt="TAESA"
                        height={50}
                        width={136}
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
                    href="https://www.moura.com.br/"
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
                        src="/images/sponsors/moura.png"
                        alt="Moura"
                        height={50}
                        width={95}
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
                    href="http://www.okkrep.com.br/"
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
                        src="/images/sponsors/Logos_Dist_Okk.png"
                        alt="PHB"
                        height={50}
                        width={79}
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
                alt={t('BRONZE_MEDAL_LABEL') as string}
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
              <Grid item>
                <motion.div
                  animate={{ y: [-400, 0], opacity: [0, 1] }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                >
                  <a
                    href="http://www.supplier.ind.br/"
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
                        src="/images/sponsors/supplier.jpg"
                        alt="Supplier"
                        height={50}
                        width={50}
                      />
                    </Card>
                  </a>
                </motion.div>
              </Grid>
              <Grid item>
                <motion.div
                  animate={{ y: [-200, 0], opacity: [0, 1] }}
                  transition={{ ease: 'easeOut', duration: 2 }}
                >
                  <a href="https://funpec.br/" target="_blank" rel="noreferrer">
                    <Card
                      elevation={5}
                      className="p-5"
                      style={{
                        backgroundColor: theme.palette.background.default,
                      }}
                    >
                      <Image
                        src="/images/sponsors/FUNPEC_principal.png"
                        alt="FUNPEC"
                        height={50}
                        width={109}
                      />
                    </Card>
                  </a>
                </motion.div>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>

      <Realization />
      <Organization />
      <Partners />
      <TechnicalSupport />
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
      'footerImages',
      'sponsors',
    ])),
  },
});

export default Sponsors;
