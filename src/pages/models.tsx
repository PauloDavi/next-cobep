import { Card, Grid, Typography, Button } from '@material-ui/core';
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
        <div className="mt-5mb-5 w-full px-8 py-5 text-white text-md leading-none">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className="flex justify-center">
                <Card elevation={5} className="px-5 pb-8 pt-5 h-full max-w-lg">
                  <div className="text-xl font-bold text-center mb-5">
                    <Typography variant="h5" color="secondary">
                      {t('PAPERS_LABEL')}
                    </Typography>
                  </div>
                  <p className="text-lg font-semibold">{t('TITLE_1_LABEL')}</p>
                  <p className="mt-5">{t('TEXT_BODY_1_LABEL')}</p>
                  <p className="mt-5">{t('TEXT_BODY_2_LABEL')}</p>
                  <p className="mt-5">{t('TEXT_BODY_3_LABEL')}</p>
                  <p className="mt-8 font-semibold">{t('TEXT_BODY_4_LABEL')}</p>
                  <ul className="list-inside list-disc">
                    <li className="mt-2">{t('TEXT_BODY_LI_1_LABEL')}</li>
                    <li className="mt-2">{t('TEXT_BODY_LI_2_LABEL')}</li>
                    <li className="mt-2">{t('TEXT_BODY_LI_3_LABEL')}</li>
                    <li className="mt-2">{t('TEXT_BODY_LI_4_LABEL')}</li>
                    <li className="mt-2">{t('TEXT_BODY_LI_5_LABEL')}</li>
                    <li className="mt-2">{t('TEXT_BODY_LI_6_LABEL')}</li>
                    <li className="mt-2">
                      <>{t('TEXT_BODY_LI_7_LABEL')}</>
                      <strong>{t('TEXT_BODY_LI_7_ENGLISH_LABEL')}</strong>
                    </li>
                  </ul>
                  <p className="mt-8 font-semibold">{t('TEXT_MODELS_LABEL')}</p>
                  <ul className="list-inside list-disc">
                    <li className="mt-2">
                      <a
                        href="/documents/COBEP2021_Digest_Template_word.docx"
                        download="COBEP2021_Digest_Template_word.docx"
                        className="underline text-yellow-600"
                      >
                        <>{t('TEXT_MODELS_LABEL')}</>.docx
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="/documents/COBEP-digest-latex-template.zip"
                        download="COBEP-digest-latex-template.zip"
                        className="underline text-yellow-600"
                      >
                        <>{t('TEXT_MODELS_LABEL')}</>.tex
                      </a>
                    </li>
                  </ul>
                </Card>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="flex justify-center">
                <Card elevation={5} className="px-5 pb-8 pt-5 h-full max-w-lg">
                  <div className="text-xl font-bold text-center mb-5">
                    <Typography variant="h5" color="secondary">
                      {t('TUTORIALS_LABEL')}
                    </Typography>
                  </div>
                  <p className="text-lg font-semibold">
                    {t('TITLE_TUTORIALS_1_LABEL')}
                  </p>
                  <p className="mt-5">{t('TEXT_BODY_TUTORIALS_1_LABEL')}</p>
                  <p className="mt-8 font-semibold">
                    {t('TEXT_BODY_TUTORIALS_2_LABEL')}
                  </p>
                  <ul className="list-inside list-disc">
                    <li className="mt-2">
                      {t('TEXT_BODY_LI_TUTORIALS_1_LABEL')}
                    </li>
                    <li className="mt-2">
                      {t('TEXT_BODY_LI_TUTORIALS_2_LABEL')}
                    </li>
                    <li className="mt-2">
                      {t('TEXT_BODY_LI_TUTORIALS_3_LABEL')}
                    </li>
                    <li className="mt-2">
                      {t('TEXT_BODY_LI_TUTORIALS_4_LABEL')}
                    </li>
                  </ul>
                  <p className="mt-8 font-semibold">{t('TEXT_MODELS_LABEL')}</p>
                  <ul className="list-inside list-disc">
                    <li className="mt-2">
                      <a
                        href="/documents/COBEP2021-Tutorial-Proposal-Template.docx"
                        download="COBEP2021_Digest_Template_word.docx"
                        className="underline text-yellow-600"
                      >
                        <>{t('TEXT_MODELS_LABEL')}</>.docx
                      </a>
                    </li>
                  </ul>
                </Card>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="flex justify-center mb-8">
          <a
            href="https://cobep2021.softaliza.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="contained" color="secondary">
              {t('SITEM_SUBMIT_BUTTON_LABEL')}
            </Button>
          </a>
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
