import { Flex } from '@chakra-ui/react';
import { Form, Button, Stack } from 'react-bootstrap';

import classNames from 'classnames';
import { Input } from '~/components/Form/Input';

const formContainer = classNames(
  'd-flex',
  'flex-column',
  'w-100',
  'p-8',
  'bg-gray-800',
  'rounded-3',
);

const buttonStyles = classNames(
  'mt-6',
  'fw-bold',
  'fs-lg',
  'bg-yellow-600',
  'border-0',
  'text-gray-800',
);

export function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Form className={formContainer} style={{ maxWidth: 400 }}>
        <Stack gap={4}>
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Password" />
        </Stack>

        <Button type="submit" className={buttonStyles} size="lg">
          Sign In
        </Button>
      </Form>
    </Flex>
  );
}
