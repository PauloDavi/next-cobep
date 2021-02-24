import React from 'react';

import { useTranslation, withTranslation } from '../../i18n';

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab';

import { Paper, Typography } from '@material-ui/core';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';

const Dates = () => {
  const { t } = useTranslation('dates');
  return (
    <div className="py-10">
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent className="mt-2">
            <Typography variant="body2" color="textSecondary">
              9:30 am
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <FastfoodIcon className="text-white" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="px-6 py-3">
              <Typography variant="h6" component="h1">
                Eat
              </Typography>
              <Typography>Because you need strength</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="mt-2">
            <Typography variant="body2" color="textSecondary">
              10:00 am
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="px-6 py-3">
              <Typography variant="h6" component="h1">
                Code
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="mt-2">
            <Typography variant="body2" color="textSecondary">
              9:30 am
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <HotelIcon className="text-white" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="px-6 py-3">
              <Typography variant="h6" component="h1">
                Sleep
              </Typography>
              <Typography>Because you need rest</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent className="mt-2">
            <Typography variant="body2" color="textSecondary">
              9:30 am
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className="px-6 py-3">
              <Typography variant="h6" component="h1">
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
Dates.getInitialProps = async () => ({
  namespacesRequired: ['dates', 'common'],
});

export default withTranslation('dates')(Dates);
