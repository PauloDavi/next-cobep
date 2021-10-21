import { Grid } from '@material-ui/core';

const VARIANTS = {
  blue: {
    primaryColor: 'bg-blue-500',
    secondaryColor: 'bg-blue-700 opacity-80',
  },
  yellow: {
    primaryColor: 'bg-yellow-500',
    secondaryColor: 'bg-yellow-700 opacity-70',
  },
};

interface LineProps {
  time: string;
  name: string;
}

export interface ScheduleTableProps {
  title: string;
  lines: LineProps[];
  variant?: keyof typeof VARIANTS;
}

export function ScheduleTable({
  title,
  lines,
  variant = 'blue',
}: ScheduleTableProps) {
  const colors = VARIANTS[variant];

  return (
    <Grid item xs={12} sm={6}>
      <table
        className="table-auto"
        style={{
          borderCollapse: 'separate',
          borderSpacing: '0.5rem',
        }}
      >
        <td
          className={`${colors.primaryColor} rounded-lg px-4 py-2 text-white font-light text-xl text-center`}
          colSpan={2}
        >
          {title}
        </td>
        {lines.map(({ name, time }) => (
          <tr key={name}>
            <td
              className={`${colors.primaryColor} rounded-lg px-4 py-2 text-white font-light text-xl w-44 text-center`}
            >
              {time}
            </td>
            <td
              className={`${colors.secondaryColor} rounded-lg px-4 py-2 text-white font-light text-xl text-center`}
            >
              {name}
            </td>
          </tr>
        ))}
      </table>
    </Grid>
  );
}
