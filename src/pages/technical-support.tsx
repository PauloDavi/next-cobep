import React from 'react';
import Head from 'next/head';

import { useTranslation } from '../../i18n';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';

const supports = [
  {
    category: 'PRESIDENT_OF_THE_BRAZILIAN_SOCIETY_OF_POWER_ELECTRONICS',
    categoryCategory: 'SOCIETY_OF_POWER_ELECTRONICS',
    people: [
      {
        name: 'Marcello Mezaroba (UDESC)',
        email: 'mezaroba@supplier.ind.br',
      },
    ],
  },
  {
    category: 'GENERAL_CHAIRS_LABEL',
    people: [
      {
        name: 'Camila Seibel Gehrke',
        email: 'camila@cear.ufpb.br',
      },
      {
        name: 'Edison Roberto Cabral da Silva',
        email: 'edison@cear.ufpb.br',
      },
    ],
  },
  {
    category: 'FINANCE_CHAIR_LABEL',
    people: [
      {
        name: 'Victor Melo',
        email: 'victor@cear.ufpb.br',
      },
    ],
  },
  {
    category: 'PUBLICITY_CHAIR_LABEL',
    people: [
      {
        name: 'Bruna Gehrke',
        email: 'brunagehrke@gmail.com',
      },
    ],
  },
  {
    category: 'WEBMASTER_LABEL',
    people: [
      {
        name: 'Paulo Araujo',
        email: 'paulo.araujo@cear.ufpb.br',
      },
    ],
  },
  {
    category: 'LOCAL_ARRANGEMENT_CHAIRS_EXHIBIT_&_PARTNERSHIPS_CHAIRS_LABEL',
    people: [
      {
        name: 'Nady Rocha',
        email: 'nady@cear.ufpb.br',
      },
    ],
  },
  {
    category: 'TECHNICAL_COMMITTEE_LABEL',
    people: [
      {
        name: 'Darlan Alexandria Fernandes (UFPB)',
        email: '',
      },
      {
        name: 'Fabiano Salvador (UFPB)',
        email: '',
      },
      {
        name: 'Italo Roger Ferreira Moreno da Silva (UFPB)',
        email: '',
      },
      {
        name: 'Isaac de Freitas Soares (UFPB)',
        email: '',
      },
      {
        name: 'Joao Teixeira de Carvalho Neto (IFRN)',
        email: '',
      },
    ],
  },
];

const TechnicalSupport = () => {
  const { t } = useTranslation('technical-support');

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>

      <div className="p-8">
        <Grid container spacing={2}>
          {supports.map((support, index) => (
            <Grid xs={12} md={6} lg={4} item key={support.category}>
              <motion.div
                animate={{ y: [100, 0], opacity: [0, 1] }}
                transition={{
                  ease: 'easeOut',
                  duration: 1,
                  delay: index * 0.2,
                }}
              >
                <div className="text-lg font-bold text-blue-500">
                  {t(support.category)}
                  {support.categoryCategory && (
                    <>
                      <br />
                      {t(support.categoryCategory)}
                    </>
                  )}
                </div>
                {support.people.map((item, index) => (
                  <div className={clsx(index !== 0 && 'mt-4')} key={item.name}>
                    <Typography className="font-bold">{item.name}</Typography>
                    {item.email !== '' && (
                      <a
                        href={`mailto:${item.email}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.email}
                      </a>
                    )}
                  </div>
                ))}
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['technical-support', 'common'],
    },
  };
};

export default TechnicalSupport;
