import { Box, Link, Icon } from '@chakra-ui/react';
import { RiDashboardLine, RiNumbersLine } from 'react-icons/ri';
import { FaPhoneSquare } from 'react-icons/fa';
import classNames from 'classnames';

import { Stack } from '~/components/Stack';

const sideBarContainer = classNames('w-60');
const areaTitle = classNames(
  'd-inline-block',
  'my-4',
  'text-gray-400',
  'fs-sm',
);
const linkStack = classNames('mt-4', 'align-items-stretch');
const linkDisplay = classNames('d-flex', 'align-items-center');
const linkTextStyles = classNames('ms-4', 'fs-base');

export function Sidebar() {
  return (
    <Box as="aside" className={sideBarContainer}>
      <Stack gap={12}>
        <Box>
          <strong className={areaTitle}>GENERAL</strong>

          <Stack gap={4} className={linkStack}>
            <Link className={linkDisplay}>
              <Icon as={RiDashboardLine} fontSize="20" />
              <span className={linkTextStyles}>Dashboard</span>
            </Link>
            <Link className={linkDisplay}>
              <Icon as={FaPhoneSquare} fontSize="20" />
              <span className={linkTextStyles}>Numbers</span>
            </Link>
          </Stack>
        </Box>

        <Box>
          <strong className={areaTitle}>SALES</strong>

          <Stack gap={4} className={linkStack}>
            <Link className={linkDisplay}>
              <Icon as={FaPhoneSquare} fontSize="20" />
              <span className={linkTextStyles}>Available</span>
            </Link>
            <Link className={linkDisplay}>
              <Icon as={RiNumbersLine} fontSize="20" />
              <span className={linkTextStyles}>Sold</span>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
