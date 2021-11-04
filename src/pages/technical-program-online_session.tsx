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
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface ProgramItemProps {
  title: string;
  children: ReactNode;
}

function ProgramItem({ title, children }: ProgramItemProps) {
  return (
    <>
      <TableRow tabIndex={-1}>
        <TableCell colSpan={2} align="center">
          <p className="font-semibold text-lg">{title}</p>
        </TableCell>
      </TableRow>
      {children}
    </>
  );
}

const rows = [
  {
    title: 'ONLINE_SESSION_TITLE_1_LABEL',
    rows: [
      {
        data: 'ONLINE_SESSION_DATE_1_1_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_1_1_LABEL',
      },
      {
        data: 'ONLINE_SESSION_DATE_1_2_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_1_2_LABEL',
      },
    ],
  },
  {
    title: 'ONLINE_SESSION_TITLE_2_LABEL',
    rows: [
      {
        data: 'ONLINE_SESSION_DATE_2_1_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_2_1_LABEL',
      },
      {
        data: 'ONLINE_SESSION_DATE_2_2_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_2_2_LABEL',
      },
      {
        data: 'ONLINE_SESSION_DATE_2_3_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_2_3_LABEL',
      },
      {
        data: 'ONLINE_SESSION_DATE_2_4_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_2_4_LABEL',
      },
      {
        data: 'ONLINE_SESSION_DATE_2_5_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_2_5_LABEL',
      },
      {
        data: 'ONLINE_SESSION_DATE_2_6_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_2_6_LABEL',
      },
    ],
  },
  {
    title: 'ONLINE_SESSION_TITLE_3_LABEL',
    rows: [
      {
        data: 'ONLINE_SESSION_DATE_3_1_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_3_1_LABEL',
      },
      {
        data: 'ONLINE_SESSION_DATE_3_2_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_3_2_LABEL',
      },
      {
        data: 'ONLINE_SESSION_DATE_3_3_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_3_3_LABEL',
      },
      {
        data: 'ONLINE_SESSION_DATE_3_4_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_3_4_LABEL',
      },
      {
        data: 'ONLINE_SESSION_DATE_3_5_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_3_5_LABEL',
      },
    ],
  },
  {
    title: 'ONLINE_SESSION_TITLE_4_LABEL',
    rows: [
      {
        data: 'ONLINE_SESSION_DATE_4_1_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_4_1_LABEL',
      },
    ],
  },
  {
    title: 'ONLINE_SESSION_TITLE_5_LABEL',
    rows: [
      {
        data: 'ONLINE_SESSION_DATE_5_1_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_5_1_LABEL',
      },
      {
        data: 'ONLINE_SESSION_DATE_5_2_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_5_2_LABEL',
      },
    ],
  },
  {
    title: 'ONLINE_SESSION_TITLE_6_LABEL',
    rows: [
      {
        data: 'ONLINE_SESSION_DATE_6_1_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_6_1_LABEL',
      },
    ],
  },
  {
    title: 'ONLINE_SESSION_TITLE_7_LABEL',
    rows: [
      {
        data: 'ONLINE_SESSION_DATE_7_1_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_7_1_LABEL',
      },
    ],
  },
  {
    title: 'ONLINE_SESSION_TITLE_8_LABEL',
    rows: [
      {
        data: 'ONLINE_SESSION_DATE_8_1_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_8_1_LABEL',
      },
    ],
  },
  {
    title: 'ONLINE_SESSION_TITLE_9_LABEL',
    rows: [
      {
        data: 'ONLINE_SESSION_DATE_9_1_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_9_1_LABEL',
      },
    ],
  },
  {
    title: 'ONLINE_SESSION_TITLE_10_LABEL',
    rows: [
      {
        data: 'ONLINE_SESSION_DATE_10_1_LABEL',
        description: 'ONLINE_SESSION_DESCRIPTION_10_1_LABEL',
      },
    ],
  },
];

export default function TechnicalProgram() {
  const { t } = useTranslation('technical-program-online-session');

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
                {rows.map(({ title, rows: sectionRow }) => (
                  <ProgramItem key={title} title={t(title)}>
                    {sectionRow.map(({ data, description }) => (
                      <TableRow key={data} tabIndex={-1}>
                        <TableCell style={{ minWidth: 60 }}>
                          {t(data)}
                        </TableCell>
                        <TableCell>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: t(description),
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </ProgramItem>
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
      'technical-program-online-session',
    ])),
  },
});
