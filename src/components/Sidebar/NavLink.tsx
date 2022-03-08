import { ElementType } from 'react';
import { NavLink as Link, NavLinkProps as BsLinkProps } from 'react-bootstrap';

import { Icon } from '@chakra-ui/react';
import classes from 'classnames';

interface NavLinkProps extends BsLinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link
      className={classes('d-flex', 'align-items-center', 'px-0', 'text-white')}
      {...rest}
    >
      <Icon as={icon} fontSize="20" />
      <span className={classes('ms-4', 'fs-base')}>{children}</span>
    </Link>
  );
}
