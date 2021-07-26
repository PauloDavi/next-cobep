import { Grid } from '@material-ui/core';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Registrations() {
  const { t } = useTranslation('registrations');

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div>
        <h1 className="text-gray-600 text-6xl sm:text-8xl text-center">
          {t('REGISTRATIONS_LABEL')}
        </h1>
        <div className="mt-5">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <table className="flex flex-col justify-center">
                <tr>
                  <th></th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                </tr>
                <tr>
                  <td>Jill</td>
                  <td>Jill</td>
                  <td>Smith</td>
                </tr>
              </table>
            </Grid>
            <Grid item xs={12} sm={6}>
              <table className="flex flex-col justify-center">
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                </tr>
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                </tr>
              </table>
            </Grid>
          </Grid>
        </div>
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
      'registrations',
    ])),
  },
});
