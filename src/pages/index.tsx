import React from 'react';

import { useTranslation, withTranslation } from '../../i18n';
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
    <div>
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
          <div data-src="https://s2.glbimg.com/HqOu1Nq3WLip_5j1Q9rg4ZQEFgg=/0x0:1118x566/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/R/H/5ODJRwTiuFPPUfPAMFLw/amojampa-joaopessoa-julianasantossecom2.jpg" />
          <div data-src="https://s2.glbimg.com/HqOu1Nq3WLip_5j1Q9rg4ZQEFgg=/0x0:1118x566/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/R/H/5ODJRwTiuFPPUfPAMFLw/amojampa-joaopessoa-julianasantossecom2.jpg" />
          <div data-src="https://s2.glbimg.com/HqOu1Nq3WLip_5j1Q9rg4ZQEFgg=/0x0:1118x566/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/R/H/5ODJRwTiuFPPUfPAMFLw/amojampa-joaopessoa-julianasantossecom2.jpg" />
        </AutoplaySlider>
        <div className="px-8 pb-16 pt-5 text-white font-bold text-md leading-none">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3">
                Congresso Brasileiro de Eletrônica de Potencia
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                className={clsx(
                  'text-center px-5 pb-8 pt-5 h-full',
                  classes.shadow
                )}
              >
                <div className="text-xl text-left mb-5">
                  <span>Titulo 1</span>
                </div>
                <p>
                  Um texto grande explicando alguma coisa... e bla bla bla bla
                  bla blbalba
                </p>
                <p className="mt-5">
                  Um texto grande explicando alguma coisa...
                </p>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                className={clsx(
                  'text-center px-5 pb-8 pt-5 h-full',
                  classes.shadow
                )}
              >
                <div className="text-xl text-left mb-5">
                  <span>Titulo 2</span>
                </div>
                <p>Um texto grande explicando alguma coisa...</p>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <div className="w-48" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="flex justify-center">
                <Button
                  className={classes.shadow}
                  variant="contained"
                  color="secondary"
                >
                  Clique aqui 1
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="flex justify-center">
                <Button
                  className={classes.shadow}
                  variant="contained"
                  color="secondary"
                >
                  Clique aqui 2
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="flex justify-center">
                <Button
                  className={classes.shadow}
                  variant="contained"
                  color="secondary"
                >
                  Clique aqui 3
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="mt-10 w-full px-8 py-5 text-white font-bold text-md leading-none">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className="flex justify-center">
              <Card
                className={clsx(
                  'text-center px-5 pb-8 pt-5 h-full max-w-sm',
                  classes.shadow
                )}
              >
                <div className="text-xl text-center mb-5">
                  <Typography variant="h5" color="secondary">
                    CALL FOR PAPERS
                  </Typography>
                  <div className="mt-4">
                    <Image
                      src="https://www.ieee-ecce.org/2021/wp-content/uploads/sites/7/2020/09/Call-for-Papers-e1600095050722.png"
                      alt="CALL FOR PAPERS"
                      width={120}
                      height={159}
                    />
                  </div>
                </div>
                <p>
                  Um texto grande explicando alguma coisa... e bla bla bla bla
                  bla blbalba
                </p>
                <p className="mt-5">
                  Um texto grande explicando alguma coisa...
                </p>
              </Card>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="flex justify-center">
              <Card
                className={clsx(
                  'text-center px-5 pb-8 pt-5 h-full max-w-sm',
                  classes.shadow
                )}
              >
                <div className="text-xl text-center mb-5">
                  <Typography variant="h5" color="secondary">
                    CALL FOR TUTORIALS
                  </Typography>
                  <div className="mt-4">
                    <Image
                      src="https://www.ieee-ecce.org/2021/wp-content/uploads/sites/7/2020/09/Call-for-Papers-e1600095050722.png"
                      alt="CALL FOR TUTORIALS"
                      width={120}
                      height={159}
                    />
                  </div>
                </div>
                <p>
                  Um texto grande explicando alguma coisa... e bla bla bla bla
                  bla blbalba
                </p>
                <p className="mt-5">
                  Um texto grande explicando alguma coisa...
                </p>
              </Card>
            </div>
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
                src="https://s2.glbimg.com/HqOu1Nq3WLip_5j1Q9rg4ZQEFgg=/0x0:1118x566/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/R/H/5ODJRwTiuFPPUfPAMFLw/amojampa-joaopessoa-julianasantossecom2.jpg"
                alt="CALL FOR TUTORIALS"
              />
            </div>
          </Hidden>
          <div
            className="bg-white flex flex-col p-5 rounded"
            style={{ maxWidth: 400 }}
          >
            <div className="mb-5">
              <Typography variant="h3">João Pessoa</Typography>
            </div>
            <div className="mb-5">
              <Typography variant="body1">
                Nascida de costas para o mar, ao contrário das demais capitais
                do país banhadas pelo oceano Atlântico, João Pessoa foi fundada
                no dia 5 de agosto de 1585, pelos colonizadores portugueses.
                Chamada de “Cidade Real de Nossa Senhora das Neves”, suas
                primeiras edificações foram às margens do Rio Sanhauá, um
                afluente do Rio Paraíba, hoje conhecido como Porto do Capim, no
                bairro do Varadouro.
              </Typography>
            </div>
            <a
              href="https://turismo.joaopessoa.pb.gov.br/um-pouco-da-sua-historia/"
              rel="noreferrer"
              target="_blank"
              style={{ marginTop: 'auto' }}
            >
              <Button color="primary" fullWidth variant="contained">
                <span className="text-white">Site</span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <TechnicalSupport />
      <Organization />
    </div>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['index'],
});

export default withTranslation('common')(Home);
