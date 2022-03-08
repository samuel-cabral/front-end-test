import { RiAddCircleLine, RiNotificationLine } from 'react-icons/ri';

import { Icon } from '@chakra-ui/react';
import classNames from 'classnames';

import { Stack } from '../Stack';

export function NotificationsNav() {
  return (
    <Stack
      direction="horizontal"
      gap={8}
      className={classNames(
        'mx-8',
        'my-6',
        'pe-8',
        'py-4',
        'text-gray-400',
        'border-end',
        'border-3',
        'border-gray-800',
      )}
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiAddCircleLine} fontSize="20" />
    </Stack>
  );
}
