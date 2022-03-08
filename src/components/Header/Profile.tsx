import Avatar from 'react-avatar';
import { Container } from 'react-bootstrap';

import { Stack } from '~/components/Stack';

export function Profile() {
  return (
    <Stack direction="horizontal" className="mx-auto">
      <Container className="ps-0 me-4 text-end">
        <p className="fs-lg mb-2">Samuel Cabral</p>
        <p className="text-gray-500 fs-sm mb-0">samuelcabral.mail@gmail.com</p>
      </Container>

      <Container className="ps-0">
        <Avatar
          round
          size="60"
          name="Samuel Cabral"
          src="https://github.com/samuel-cabral.png"
        />
      </Container>
    </Stack>
  );
}
