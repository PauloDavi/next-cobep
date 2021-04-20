import { useTranslation } from '../../i18n';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: '2rem 4rem',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightBold,
    },
  })
);

const Faq = () => {
  const { t } = useTranslation('faq');
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div className={classes.root}>
        <Typography variant="h2" align="center">
          {t('TITLE_LABEL')}
        </Typography>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              1. {t('ACCORDION_1_TITLE_LABEL')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t('ACCORDION_1_BODY_LABEL')}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              2. {t('ACCORDION_2_TITLE_LABEL')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t('ACCORDION_2_BODY_LABEL')}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              3. {t('ACCORDION_3_TITLE_LABEL')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {t('ACCORDION_3_BODY_LABEL')}
              <Link href="https://cobep.vercel.app/models">
                <a target="_blank">https://cobep.vercel.app/models</a>
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              4. {t('ACCORDION_8_TITLE_LABEL')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t('ACCORDION_8_BODY_LABEL')}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              5. {t('ACCORDION_4_TITLE_LABEL')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t('ACCORDION_4_BODY_LABEL')}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              6. {t('ACCORDION_5_TITLE_LABEL')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t('ACCORDION_5_BODY_LABEL')}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              7. {t('ACCORDION_6_TITLE_LABEL')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t('ACCORDION_6_BODY_LABEL')}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              8. {t('ACCORDION_7_TITLE_LABEL')}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t('ACCORDION_7_BODY_LABEL')}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['faq', 'common'],
    },
  };
};

export default Faq;