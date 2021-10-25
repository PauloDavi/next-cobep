import { Grid } from '@material-ui/core';

interface TutorialItemProps {
  index: number;
  title: string;
  time: string;
  minister: string;
  duration: string;
  description: string;
}

export function TutorialItem({
  title,
  time,
  index,
  minister,
  duration,
  description,
}: TutorialItemProps) {
  return (
    <Grid item>
      <div className="flex flex-col">
        <span
          className="font-bold text-4xl my-4"
          style={{ whiteSpace: 'pre-line' }}
        >
          {`Tutorial ${index + 1}: ${title}`}
        </span>
        <span className="text-xl my-2" style={{ whiteSpace: 'pre-line' }}>
          {minister}
        </span>
        <span className="text-xl my-2" style={{ whiteSpace: 'pre-line' }}>
          {time}
        </span>
        <span className="text-xl my-2" style={{ whiteSpace: 'pre-line' }}>
          {duration}
        </span>
        <p className="text-xl my-2" style={{ whiteSpace: 'pre-line' }}>
          {description}
        </p>
      </div>
    </Grid>
  );
}
