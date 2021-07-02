import React from 'react';

import { useTranslation } from '../../i18n';

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab';

import { Paper, Typography, Button } from '@material-ui/core';

import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import Head from 'next/head';

import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Dates = () => {
  const { t } = useTranslation('dates');

  return (
    <>
      <Head>
        <title>{t('PAGE_TITLE_LABEL')}</title>
      </Head>
      <div className="py-10">
        <h1 className="text-center text-5xl font-bold mb-5">
          {t('PAGE_TITLE_LABEL')}
        </h1>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent className="mt-2">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, type: 'spring' }}
              >
                <Typography variant="body2" color="textSecondary">
                  <s>{t('DATE_RESUME_DEADLINE_LABEL')}</s>{' '}
                  {t('DATE_RESUME_DEADLINE_LABEL_CORRECT')}
                </Typography>
              </motion.div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <DescriptionOutlinedIcon className="text-white" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 1.5, type: 'spring' }}
              >
                <Paper elevation={3} className="px-6 py-3">
                  <Typography variant="h6" component="h1">
                    {t('RESUME_DEADLINE_LABEL')}
                  </Typography>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className="mt-2">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.5, type: 'spring' }}
              >
                <Typography variant="body2" color="textSecondary">
                  <s>{t('DATE_TUTORIALS_DEADLINE_LABEL')}</s>{' '}
                  {t('DATE_TUTORIALS_DEADLINE_LABEL_CORRECT')}
                </Typography>
              </motion.div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <InsertDriveFileOutlinedIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1.5, type: 'spring' }}
              >
                <Paper elevation={3} className="px-6 py-3">
                  <Typography variant="h6" component="h1">
                    {t('TUTORIALS_DEADLINE_LABEL')}
                  </Typography>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className="mt-2">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1.5, type: 'spring' }}
              >
                <Typography variant="body2" color="textSecondary">
                  {t('DATE_ACCEPTED_NOTIFICATION_DEADLINE_LABEL')}
                </Typography>
              </motion.div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <NotificationsNoneOutlinedIcon className="text-white" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5, type: 'spring' }}
              >
                <Paper elevation={3} className="px-6 py-3">
                  <Typography variant="h6" component="h1">
                    {t('ACCEPTED_NOTIFICATION_DEADLINE_LABEL')}
                  </Typography>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className="mt-2">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1.5, type: 'spring' }}
              >
                <Typography variant="body2" color="textSecondary">
                  {t('DATE_INDUSTRY_SESSION_LABEL')}
                </Typography>
              </motion.div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <DescriptionOutlinedIcon className="text-white" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1.5, type: 'spring' }}
              >
                <Paper elevation={3} className="px-6 py-3">
                  <Typography variant="h6" component="h1">
                    {t('RESUME_DEADLINE_LABEL')} ({t('INDUSTRY_SESSION_LABEL')})
                  </Typography>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className="mt-2">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1.5, type: 'spring' }}
              >
                <Typography variant="body2" color="textSecondary">
                  {t('DATE_FINAL_SUBMISSION_DEADLINE_LABEL')}
                </Typography>
              </motion.div>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SendOutlinedIcon className="text-white" />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1.5, type: 'spring' }}
              >
                <Paper elevation={3} className="px-6 py-3">
                  <Typography variant="h6" component="h1">
                    {t('FINAL_SUBMISSION_DEADLINE_LABEL')}
                  </Typography>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <div className="flex justify-center mt-8 mb-8">
          <a
            href="https://cobep2021.softaliza.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="contained" color="secondary">
              {t('SITEM_SUBMIT_BUTTON_LABEL')}
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      namespacesRequired: ['dates', 'common'],
    },
  };
};

export default Dates;
