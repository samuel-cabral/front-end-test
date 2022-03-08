import {
  FormControl,
  FormControlProps,
  FormLabel,
  FormGroup,
} from 'react-bootstrap';

import {
  FormControlOptions,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import classes from 'classnames';

interface InputProps
  extends FormControlProps,
    Pick<ChakraInputProps, 'focusBorderColor'> {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormGroup>
      {!!label && (
        <FormLabel className="text-gray-500" htmlFor={name}>
          {label}
        </FormLabel>
      )}

      <FormControl
        id={name}
        name={name}
        className={classes('bg-gray-900', 'text-gray-100', 'border-0')}
        size="lg"
        {...rest}
      />
    </FormGroup>
  );
}
