import Image from 'next/image';
import { Card, Grid, Typography } from '@material-ui/core';
import { useTranslation } from '../../i18n';
import { GetStaticProps } from 'next';
import Head from 'next/head';

const Models = () => {
  const { t } = useTranslation('models');

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div className="mt-24">
        <h1 className="text-gray-600 text-6xl sm:text-8xl text-center">
          {t('MODELS_LABEL')}
        </h1>
        <div className="mt-5 mb-5 w-full px-8 py-5 text-white font-bold text-md leading-none">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className="flex justify-center">
                <Card
                  elevation={5}
                  className="text-center px-5 pb-8 pt-5 h-full max-w-sm"
                >
                  <div className="text-xl text-center mb-5">
                    <Typography variant="h5" color="secondary">
                      {t('PAPERS_LABEL')}
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
                  <p>{t('PAPERS_PRIMARY_TEXT_LABEL')}</p>
                  <p className="mt-5">{t('PAPERS_SECONDARY_TEXT_LABEL')}</p>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="flex justify-center">
                <Card
                  elevation={5}
                  className="text-center px-5 pb-8 pt-5 h-full max-w-sm"
                >
                  <div className="text-xl text-center mb-5">
                    <Typography variant="h5" color="secondary">
                      {t('TUTORIALS_LABEL')}
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
                  <p>{t('TUTORIALS_PRIMARY_TEXT_LABEL')}</p>
                  <p className="mt-5">{t('TUTORIALS_SECONDARY_TEXT_LABEL')}</p>
                </Card>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['models', 'common'],
    },
  };
};

export default Models;
