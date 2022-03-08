import { Stack, FormControl } from 'react-bootstrap';
import { RiSearchLine } from 'react-icons/ri';

import { Icon } from '@chakra-ui/react';
import classNames from 'classnames';

const searchInputLabel = classNames(
  'flex',
  'py-2',
  'px-8',
  'align-self-center',
  'text-gray-200',
  'position-relative',
  'bg-gray-800',
  'rounded-pill',
);

const searchInputContent = classNames(
  'text-truncate',
  'text-gray-100',
  'unstyled',
  'p-0',
);

export function SearchBox() {
  return (
    <Stack
      gap={4}
      as="label"
      direction="horizontal"
      className={searchInputLabel}
      style={{ maxWidth: 400 }}
    >
      <Icon as={RiSearchLine} fontSize="20" />
      <FormControl
        size="lg"
        className={searchInputContent}
        placeholder="Search in the platform..."
      />
    </Stack>
  );
}
