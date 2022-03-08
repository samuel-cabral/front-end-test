import { Stack } from '~/components/Stack';

export function Logo() {
  return (
    <Stack style={{ maxWidth: 250 }}>
      <h1 className="display-5 fw-bold">
        Telego
        <span className="text-pink-500">.</span>
      </h1>
    </Stack>
  );
}
