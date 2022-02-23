import { ReactNode } from 'react';
import { Stack as BsStack, StackProps as BsStackProps } from 'react-bootstrap';
import { ResponsiveUtilityValue } from 'react-bootstrap/esm/createUtilityClasses';
import { GapValue } from 'react-bootstrap/esm/types';

interface StackProps extends BsStackProps {
  gap?: ResponsiveUtilityValue<GapValue> & (6 | 7 | 8 | 9 | 10);
  children?: ReactNode;
}

export function Stack({ gap, children, ...rest }: StackProps): JSX.Element {
  return (
    <BsStack gap={gap} {...rest}>
      {children}
    </BsStack>
  );
}
