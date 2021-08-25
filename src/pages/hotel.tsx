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
              <Typography className="text-white text-4xl">Parques</Typography>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/images/hotel/fachada.jpg" layout="fill" />
              <Typography className="text-white text-4xl">Parques</Typography>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/images/hotel/piscina.png" layout="fill" />
              <Typography className="text-white text-4xl">Parques</Typography>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/images/hotel/recepcao.png" layout="fill" />
              <Typography className="text-white text-4xl">Parques</Typography>
            </div>
            <div className="flex justify-center items-center">
              <Image src="/images/hotel/soalrium.png" layout="fill" />
              <Typography className="text-white text-4xl">Parques</Typography>
            </div>
          </AutoplaySlider>
        </div>

        <div className="max-w-4xl w-full mx-auto mb-8">
          <h2 className="mt-8 text-4xl font-bold">Hotel Manaíra</h2>

          <div className="mt-2 text-lg">
            O Hotel Manaíra está situado a pouco metros da praia, em uma das
            principais avenidas da cidade, próximo a shoppings, boutiques, bares
            e restaurantes. Com um conceito contemporâneo, sofisticado e
            cuidadoso, nossos detalhes transformam cada hospedagem em uma
            experiência inesquecível para tornar sua vinda ainda mais prazerosa
          </div>

          <div className="flex flex-col items-center mx-auto my-8 max-w-5xl">
            <Paper elevation={3} className="p-6">
              <ul className="list-disc ml-4">
                <li className="text-lg">
                  O desconto de 25% será aplicado na categoria Superior;
                </li>
                <li className="mt-2 text-lg">
                  O desconto não é acumulativo com outras promoções;
                </li>
                <li className="mt-2 text-lg">
                  Necessário informar que deseja o desconto do evento COBEP;
                </li>
                <li className="mt-2 text-lg">Café da manhã incluso;</li>
                <li className="mt-2 text-lg">Estacionamento incluso;</li>
                <li className="mt-2 text-lg">
                  Reserva através do telefone/whatsapp{' '}
                  <strong>(83) 3021-9704</strong> ou e-mail{' '}
                  <strong className="hover:underline">
                    <a href="mailto:reservas@hotelmanaira.com.br">
                      reservas@hotelmanaira.com.br
                    </a>
                  </strong>
                  .
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
