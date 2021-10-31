import { Link } from '@material-ui/core';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

const IEEEPELSWIEBreakfast = () => {
  const { t } = useTranslation('ieee-pels-wie-breakfast');

  return (
    <div className="max-w-5xl mx-auto px-16 py-12 flex flex-col">
      <h1 className="text-center text-3xl font-bold">{t('TITLE_LABEL')}</h1>
      <div className="text-justify text-xl">
        <p className="mt-8" style={{ whiteSpace: 'pre-line' }}>
          {t('P1')}
          <Link href="https://bit.ly/WIEbreakfast">
            https://bit.ly/WIEbreakfast
          </Link>
        </p>

        <p style={{ whiteSpace: 'pre-line' }}>{t('P2')}</p>
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
      'ieee-pels-wie-breakfast',
    ])),
  },
});

export default IEEEPELSWIEBreakfast;
