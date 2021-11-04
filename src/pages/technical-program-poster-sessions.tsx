import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Card,
} from '@material-ui/core';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

interface ProgramItemProps {
  title: string;
  data: string;
  description: string;
}

function ProgramItem({ title, description, data }: ProgramItemProps) {
  return (
    <>
      <TableRow tabIndex={-1}>
        <TableCell colSpan={2} align="center">
          <p className="font-semibold text-lg">{title}</p>
        </TableCell>
      </TableRow>
      <TableRow tabIndex={-1}>
        <TableCell style={{ minWidth: 60 }}>{data}</TableCell>
        <TableCell>
          <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  {
    title: 'ONLINE_SESSION_TITLE_1_LABEL',
    data: 'ONLINE_SESSION_DATE_1_LABEL',
    description: 'ONLINE_SESSION_DESCRIPTION_1_LABEL',
  },
  {
    title: 'ONLINE_SESSION_TITLE_2_LABEL',
    data: 'ONLINE_SESSION_DATE_2_LABEL',
    description: 'ONLINE_SESSION_DESCRIPTION_2_LABEL',
  },
  {
    title: 'ONLINE_SESSION_TITLE_3_LABEL',
    data: 'ONLINE_SESSION_DATE_3_LABEL',
    description: 'ONLINE_SESSION_DESCRIPTION_3_LABEL',
  },
  {
    title: 'ONLINE_SESSION_TITLE_4_LABEL',
    data: 'ONLINE_SESSION_DATE_4_LABEL',
    description: 'ONLINE_SESSION_DESCRIPTION_4_LABEL',
  },
  {
    title: 'ONLINE_SESSION_TITLE_5_LABEL',
    data: 'ONLINE_SESSION_DATE_5_LABEL',
    description: 'ONLINE_SESSION_DESCRIPTION_5_LABEL',
  },
  {
    title: 'ONLINE_SESSION_TITLE_6_LABEL',
    data: 'ONLINE_SESSION_DATE_6_LABEL',
    description: 'ONLINE_SESSION_DESCRIPTION_6_LABEL',
  },
  {
    title: 'ONLINE_SESSION_TITLE_7_LABEL',
    data: 'ONLINE_SESSION_DATE_7_LABEL',
    description: 'ONLINE_SESSION_DESCRIPTION_7_LABEL',
  },
  {
    title: 'ONLINE_SESSION_TITLE_8_LABEL',
    data: 'ONLINE_SESSION_DATE_8_LABEL',
    description: 'ONLINE_SESSION_DESCRIPTION_8_LABEL',
  },
  {
    title: 'ONLINE_SESSION_TITLE_9_LABEL',
    data: 'ONLINE_SESSION_DATE_9_LABEL',
    description: 'ONLINE_SESSION_DESCRIPTION_9_LABEL',
  },
  {
    title: 'ONLINE_SESSION_TITLE_10_LABEL',
    data: 'ONLINE_SESSION_DATE_10_LABEL',
    description: 'ONLINE_SESSION_DESCRIPTION_10_LABEL',
  },
  {
    title: 'ONLINE_SESSION_TITLE_11_LABEL',
    data: 'ONLINE_SESSION_DATE_11_LABEL',
    description: 'ONLINE_SESSION_DESCRIPTION_11_LABEL',
  },
];

export default function TechnicalProgram() {
  const { t } = useTranslation('technical-program-poster-session');

  return (
    <div className="p-8">
      <div className="flex flex-col justify-center max-w-5xl mx-auto">
        <span className="mb-4 text-center text-4xl font-bold">
          {t('TITLE_ONLINE_SESSION_LABEL')}
        </span>
        <Card>
          <TableContainer>
            <Table>
              <TableBody>
                {rows.map(({ title, data, description }) => (
                  <ProgramItem
                    key={title}
                    title={t(title)}
                    data={t(data)}
                    description={t(description)}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
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
      'technical-program-poster-session',
    ])),
  },
});
