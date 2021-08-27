import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Typography, Paper } from '@material-ui/core';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';

const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Faq = () => {
  const { t } = useTranslation('hotel');
  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div>
        <div className="-mt-16">
          <AutoplaySlider
            bullets={false}
            play={true}
            interval={4000}
            animation="cubeAnimation"
          >
            <div className="flex justify-center items-center">
              <Image src="/images/hotel/bar_do_lobby.png" layout="fill" />
              <Typography className="text-white text-4xl">
                Bar do lobby
              </Typography>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/images/hotel/fachada.jpg" layout="fill" />
              <Typography className="text-white text-4xl">Fachada</Typography>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/images/hotel/piscina.png" layout="fill" />
              <Typography className="text-white text-4xl">Piscina</Typography>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/images/hotel/recepcao.png" layout="fill" />
              <Typography className="text-white text-4xl">Recepção</Typography>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/images/hotel/soalrium.png" layout="fill" />
              <Typography className="text-white text-4xl">Soalrium</Typography>
            </div>
          </AutoplaySlider>
        </div>

        <div className="max-w-4xl w-full mx-auto mb-8">
          <h2 className="mt-8 text-4xl font-bold">Hotel Manaíra</h2>

          <p className="mt-2 text-lg">{t('alert_1')}</p>
          <p className="mt-2 text-lg">{t('description_1')}</p>

          <div className="flex flex-col items-center mx-auto my-8 max-w-5xl">
            <Paper elevation={3} className="p-6">
              <ul className="list-disc ml-4">
                <li className="text-lg">{t('list_1_1')}</li>
                <li className="mt-2 text-lg">{t('list_1_2')}</li>
                <li className="mt-2 text-lg">{t('list_1_3')}</li>
                <li className="mt-2 text-lg">{t('list_1_4')}</li>
                <li className="mt-2 text-lg">{t('list_1_5')}</li>
                <li className="mt-2 text-lg">
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: t('list_1_6') }}
                  />
                </li>
              </ul>
            </Paper>
          </div>

          <Map />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'header',
      'hotel',
      'footer',
      'common',
      'languageSwitcher',
    ])),
  },
});

export default Faq;
