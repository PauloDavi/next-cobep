import { Link } from '@material-ui/core';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const SchnaPYs = () => {
  const { t } = useTranslation('schna-pys');

  return (
    <div className="max-w-5xl mx-auto px-16 py-12 flex flex-col">
      <h1 className="text-center text-3xl font-bold">{t('TITLE_LABEL')}</h1>

      <div className="text-justify text-xl">
        <p style={{ whiteSpace: 'pre-line' }} className="mt-8">
          {t('P1')}
          <Link href="https://bit.ly/yp-cobep2021">
            https://bit.ly/yp-cobep2021
          </Link>
        </p>

        <p style={{ whiteSpace: 'pre-line' }} className="mt-4">
          {t('P1')}
        </p>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'header',
      'footer',
      'common',
      'languageSwitcher',
      'schna-pys',
    ])),
  },
});

export default SchnaPYs;
