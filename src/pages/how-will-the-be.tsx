/* eslint-disable react/no-unescaped-entities */
import { Card } from '@material-ui/core';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

export default function HowWillTheBe() {
  const { t } = useTranslation('how-will-the-be');

  return (
    <div className="px-8 py-10">
      <div className="max-w-5xl mx-auto">
        <div
          dangerouslySetInnerHTML={{
            __html: t('PART_1'),
          }}
        />

        <div className="flex gap-4 w-full justify-between mt-8">
          <Card className="px-6 py-4">
            <div
              dangerouslySetInnerHTML={{
                __html: t('CARD_1'),
              }}
            />
          </Card>

          <Card className="px-6 py-4">
            <div
              dangerouslySetInnerHTML={{
                __html: t('CARD_2'),
              }}
            />
          </Card>

          <Card className="px-6 py-4">
            <div
              dangerouslySetInnerHTML={{
                __html: t('CARD_3'),
              }}
            />
          </Card>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: t('PART_2'),
          }}
        />

        <div className="flex gap-4 w-full justify-around mt-8">
          <Card className="px-6 py-4 max-w-sm">
            <div
              dangerouslySetInnerHTML={{
                __html: t('CARD_4'),
              }}
            />
          </Card>

          <Card className="px-6 py-4 max-w-sm">
            <div
              dangerouslySetInnerHTML={{
                __html: t('CARD_5'),
              }}
            />
          </Card>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: t('PART_3'),
          }}
        />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'header',
      'footer',
      'common',
      'languageSwitcher',
      'how-will-the-be',
    ])),
  },
});
