import { Link } from '@material-ui/core';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const EnergySummit = () => {
  const { t } = useTranslation('energy-summit');

  return (
    <div className="max-w-5xl mx-auto px-16 py-12 flex flex-col">
      <h1 className="text-center text-3xl font-bold">{t('TITLE_LABEL')}</h1>

      <div className="text-justify text-xl">
        <p className="mt-8">{t('P_1')}</p>

        <p className="mt-4">
          {t('P_2')}{' '}
          <Link href="https://bit.ly/energysummit21">
            https://bit.ly/energysummit21
          </Link>
        </p>

        <p className="mt-4">{t('P_3')}</p>

        <p className="mt-4">{t('P_4')}</p>
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
      'energy-summit',
    ])),
  },
});

export default EnergySummit;
