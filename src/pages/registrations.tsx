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
        <div className="mt-8">
          <div className="flex justify-center flex-col w-full px-8">
            <h2 className="mt-8 text-3xl font-semibold text-center">
              {t('TITLE_1')}
            </h2>
            <ul className="list-disc text-lg mx-auto mt-2 mb-8">
              <li>{t('TITLE_1_ITEM_1')}</li>
              <li>
                {t('TITLE_1_ITEM_2_1')}
                <strong>{t('TITLE_1_ITEM_2_2')}</strong>;
              </li>
              <li>
                {t('TITLE_1_ITEM_3_1')}
                <strong>{t('TITLE_1_ITEM_3_2')}</strong>
                {t('TITLE_1_ITEM_3_3')}
                <strong>{t('TITLE_1_ITEM_3_4')}</strong>
                {t('TITLE_1_ITEM_3_5')}
              </li>
              <li>{t('TITLE_1_ITEM_4')}</li>
              <li>
                {t('TITLE_1_ITEM_5_1')}
                <strong>{t('TITLE_1_ITEM_5_2')}</strong>
                {t('TITLE_1_ITEM_5_3')}
                <strong>{t('TITLE_1_ITEM_5_4')}</strong>
              </li>
            </ul>
          </div>

          <div className="px-8 mb-8">
            <h2 className="mb-2 text-3xl font-semibold text-center">
              {t('TITLE_2')}
            </h2>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <div className="flex flex-col justify-center max-w-xl mx-auto">
                  <table
                    className="table-auto"
                    style={{
                      borderCollapse: 'separate',
                      borderSpacing: '0.5rem',
                    }}
                  >
                    <tr>
                      <th></th>
                      <th className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl">
                        {t('COLUMN_1')}
                      </th>
                      <th className="bg-yellow-500 rounded-lg px-4 py-2 text-white font-light text-xl">
                        {t('COLUMN_2')}
                      </th>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_1')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 600
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 400
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_2')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 900
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 600
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_3')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 300
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 180
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_4')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 600
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 380
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_5')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 150
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 60
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_6')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 300
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 180
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_7')}
                      </td>
                      <td
                        className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center"
                        colSpan={2}
                      >
                        R$ 250
                      </td>
                    </tr>
                  </table>
                  <span className="font-bold text-20 text-center">
                    {t('WARNING_1')}
                  </span>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="flex flex-col justify-center max-w-xl px-8 mx-auto">
                  <table
                    className="table-auto"
                    style={{
                      borderCollapse: 'separate',
                      borderSpacing: '0.5rem',
                    }}
                  >
                    <tr>
                      <th></th>
                      <th className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl">
                        {t('COLUMN_1')}
                      </th>
                      <th className="bg-yellow-500 rounded-lg px-4 py-2 text-white font-light text-xl">
                        {t('COLUMN_2')}
                      </th>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_1')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 400
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 250
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_2')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 550
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 350
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_3')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 150
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 100
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_4')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 300
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 200
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_5')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 40
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 20
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_6')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 80
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 50
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_7')}
                      </td>
                      <td
                        className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center"
                        colSpan={2}
                      >
                        US$ 150
                      </td>
                    </tr>
                  </table>
                  <span className="font-bold text-20 text-center">
                    {t('WARNING_2')}
                  </span>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="px-8 mb-8">
            <h2 className="mb-2 text-3xl font-semibold text-center">
              {t('TITLE_3')}
            </h2>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <div className="flex flex-col justify-center max-w-xl mx-auto">
                  <table
                    className="table-auto"
                    style={{
                      borderCollapse: 'separate',
                      borderSpacing: '0.5rem',
                    }}
                  >
                    <tr>
                      <th></th>
                      <th className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl">
                        {t('COLUMN_1')}
                      </th>
                      <th className="bg-yellow-500 rounded-lg px-4 py-2 text-white font-light text-xl">
                        {t('COLUMN_2')}
                      </th>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_1')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        -
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_2')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        -
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_3')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 400
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 280
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_4')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 700
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 480
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_5')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 200
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 110
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_6')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 350
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        R$ 230
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_7')}
                      </td>
                      <td
                        className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center"
                        colSpan={2}
                      >
                        -
                      </td>
                    </tr>
                  </table>
                  <span className="font-bold text-20 text-center">
                    {t('WARNING_1')}
                  </span>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className="flex flex-col justify-center max-w-xl px-8 mx-auto">
                  <table
                    className="table-auto"
                    style={{
                      borderCollapse: 'separate',
                      borderSpacing: '0.5rem',
                    }}
                  >
                    <tr>
                      <th></th>
                      <th className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl">
                        {t('COLUMN_1')}
                      </th>
                      <th className="bg-yellow-500 rounded-lg px-4 py-2 text-white font-light text-xl">
                        {t('COLUMN_2')}
                      </th>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_1')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        -
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_2')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        -
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        -
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_3')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 200
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 150
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_4')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 350
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 250
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_5')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 65
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 45
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_6')}
                      </td>
                      <td className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 105
                      </td>
                      <td className="bg-yellow-700 opacity-70 rounded-lg px-4 py-2 text-white font-light text-xl text-center">
                        US$ 75
                      </td>
                    </tr>
                    <tr>
                      <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                        {t('ROW_7')}
                      </td>
                      <td
                        className="bg-blue-700 opacity-80 rounded-lg px-4 py-2 text-white font-light text-xl text-center"
                        colSpan={2}
                      >
                        -
                      </td>
                    </tr>
                  </table>
                  <span className="font-bold text-20 text-center">
                    {t('WARNING_2')}
                  </span>
                </div>
              </Grid>
            </Grid>
          </div>
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
