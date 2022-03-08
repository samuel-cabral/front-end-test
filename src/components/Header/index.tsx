import classes from 'classnames';

import { Stack } from '../Stack';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  return (
    <Stack
      as="header"
      direction="horizontal"
      className={classes('w-100', 'h-20', 'mx-auto', 'my-6')}
      style={{ maxWidth: 1480 }}
    >
      <Logo />

      <SearchBox />

      <Stack direction="horizontal" className="ms-auto">
        <NotificationsNav />
        <Profile />
      </Stack>
    </Stack>
  );
}
