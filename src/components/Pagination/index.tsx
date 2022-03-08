import classNames from 'classnames';

import { Stack } from '~/components/Stack';

import { PaginationItem } from './PaginationItem';

export function Pagination() {
  return (
    <Stack
      direction="horizontal"
      gap={6}
      className={classNames('mt-8', 'justify-content-between')}
    >
      <div>
        <strong>0</strong> - <strong>10</strong> of <strong>100</strong>
      </div>

      <Stack direction="horizontal" gap={2}>
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  );
}
