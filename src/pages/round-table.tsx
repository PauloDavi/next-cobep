import { Grid, Card } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function RoundTable() {
  const { t } = useTranslation('round-table');

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card elevation={2} className="p-8">
              <h2 className="text-center font-bold text-2xl">{t('TITLE_1')}</h2>

              <div className="text-lg">
                <p className="mt-8">{t('DESCRIPTION_1')}</p>

                <ul className="mt-8 flex flex-col gap-2">
                  <li>{t('PART_1_1')}</li>
                  <li>{t('PART_1_2')}</li>
                  <li>{t('PART_1_3')}</li>
                  <li>{t('PART_1_4')}</li>
                </ul>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card elevation={2} className="p-8">
              <h2 className="text-center font-bold text-2xl">{t('TITLE_2')}</h2>

              <div className="text-lg">
                <p className="mt-8">{t('DESCRIPTION_2')}</p>

                <ul className="mt-8 flex flex-col gap-2">
                  <li>{t('PART_2_1')}</li>
                  <li>{t('PART_2_2')}</li>
                  <li>{t('PART_2_3')}</li>
                  <li>{t('PART_2_4')}</li>
                </ul>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'header',
      'footer',
      'common',
      'languageSwitcher',
      'round-table',
    ])),
  },
});
