import { Avatar } from '@material-ui/core';

export interface SpeakersItemProps {
  title: string;
  name: string;
  image: string;
  abstract: string;
  biography: string;
}

export function SpeakersItem({
  title,
  name,
  image,
  biography,
  abstract,
}: SpeakersItemProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <Avatar
        alt={name}
        src={image}
        style={{ width: '12rem', height: '12rem' }}
      />
      <div className="flex flex-col items-center justify-center pt-4 pb-1">
        <span className="m-1 text-3xl font-mono font-bold">{name}</span>
        <span className="mt-1 mb-2 text-xl font-mono font-light text-center">
          {title}
        </span>
      </div>
      <p
        className="mb-4 text-justify text-base leading-6"
        style={{ whiteSpace: 'pre-line' }}
      >
        <strong>Resumo: </strong>
        {abstract}
      </p>
      <p
        className="mb-4 text-justify text-base leading-6"
        style={{ whiteSpace: 'pre-line' }}
      >
        <strong>Biografia: </strong>
        {biography}
      </p>
    </div>
  );
}
