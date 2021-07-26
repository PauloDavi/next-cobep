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
                      PRESENCIAL
                    </th>
                    <th className="bg-yellow-500 rounded-lg px-4 py-2 text-white font-light text-xl">
                      VIRTUAL
                    </th>
                  </tr>
                  <tr>
                    <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                      Autor Membro
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
                      Autor Não Membro
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
                      Participante Membro
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
                      Participante Não Membro
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
                      Estudante Membro
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
                      Estudante Não Membro
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
                      Artigo Extra
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
                  *Preço para pessoas de países com IDH menor que 0.851
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
                      PRESENCIAL
                    </th>
                    <th className="bg-yellow-500 rounded-lg px-4 py-2 text-white font-light text-xl">
                      VIRTUAL
                    </th>
                  </tr>
                  <tr>
                    <td className="bg-blue-500 rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center">
                      Autor Membro
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
                      Autor Não Membro
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
                      Participante Membro
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
                      Participante Não Membro
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
                      Estudante Membro
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
                      Estudante Não Membro
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
                      Artigo Extra
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
                  *Prices for people from countries with HDI higher than 0.851
                </span>
              </div>
            </Grid>
          </Grid>
          <div className="flex justify-center flex-col w-full">
            <ul className="list-disc text-lg mx-auto my-8">
              <li>
                Para a submissão do artigo final a inscrição deve ser efetuada
                previamente;
              </li>
              <li>
                Para a submissão de artigos a categoria da inscrição deve ser
                <strong> Autor</strong>;
              </li>
              <li>
                Cada inscrição da direito a <strong>um </strong> artigo, e pode
                ter no máximo <strong>um </strong>
                artigo extra;
              </li>
              <li>
                Inscrições na categoria Estudante na modalidade presencial não
                incluem o jantar de gala;
              </li>
              <li>
                São considerados membros: participantes inscritos na{' '}
                <strong>SOBRAEP </strong>
                e/ou <strong>IEEE PELS</strong>
              </li>
            </ul>
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
