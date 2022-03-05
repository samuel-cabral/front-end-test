import {
  FormGroup,
  FormLabel,
  FormControl,
  FormControlProps,
} from 'react-bootstrap';
import classNames from 'classnames';

interface InputProps extends FormControlProps {
  name: string;
  label?: string;
}

const formControlStyles = classNames(
  'bg-gray-900',
  'text-gray-100',
  'border-0',
);

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormGroup>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <FormControl
        id={name}
        name={name}
        className={formControlStyles}
        size="lg"
        {...rest}
      />
    </FormGroup>
  );
}
