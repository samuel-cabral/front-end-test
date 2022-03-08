import { FaPhoneSquare } from 'react-icons/fa';
import { RiDashboardLine, RiNumbersLine } from 'react-icons/ri';

import { Box } from '@chakra-ui/react';
import classNames from 'classnames';

import { Stack } from '~/components/Stack';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

const sideBarContainer = classNames('w-60');

export function Sidebar() {
  return (
    <Box as="aside" className={sideBarContainer}>
      <Stack gap={12}>
        <NavSection title="GENERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={FaPhoneSquare}>Numbers</NavLink>
        </NavSection>

        <NavSection title="SALES">
          <NavLink icon={FaPhoneSquare}>Available</NavLink>
          <NavLink icon={RiNumbersLine}>Sold</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
