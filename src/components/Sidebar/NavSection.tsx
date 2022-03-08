import { ReactNode } from 'react';

import classes from 'classnames';

import { Stack } from '../Stack';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <div>
      <strong
        className={classes(
          'd-inline-block',
          'fs-sm',
          'my-4',
          'text-uppercase',
          'text-gray-400',
        )}
      >
        {title}
      </strong>
      <Stack gap={2} className={classes('mt-4', 'align-items-stretch')}>
        {children}
      </Stack>
    </div>
  );
}
