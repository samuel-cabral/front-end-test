import { ReactNode } from 'react';
import { Stack as BsStack, StackProps as BsStackProps } from 'react-bootstrap';
import classNames from 'classnames';

import { ResponsiveUtilityValue } from 'react-bootstrap/esm/createUtilityClasses';
import { GapValue } from 'react-bootstrap/esm/types';

interface StackProps extends BsStackProps {
  gap?: ResponsiveUtilityValue<GapValue> & number;
  align?: string;
  children?: ReactNode;
}

export function Stack({
  gap,
  align,
  children,
  ...rest
}: StackProps): JSX.Element {
  return (
    <BsStack
      gap={gap}
      className={classNames({ [`align-items-${align}`]: true })}
      {...rest}
    >
      {children}
    </BsStack>
  );
}
