import { Button, Col, Container, Row } from 'react-bootstrap';

import { Box, Divider, Flex } from '@chakra-ui/react';
import classNames from 'classnames';

import { Input } from '~/components/Form/Input';
import { Header } from '~/components/Header';
import { Sidebar } from '~/components/Sidebar';
import { Stack } from '~/components/Stack';

export function CreateNumber() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          className={classNames('bg-gray-800', 'p-8')}
        >
          <Container>
            <h2 className="fw-normal">Register number</h2>

            <Divider className="text-gray-600" />
          </Container>

          <Stack gap={8}>
            <Container fluid>
              <Row>
                <Col>
                  <Input name="value" label="Value (e.g., +55 84 91234-4321)" />
                </Col>
                <Col>
                  <Input name="monthyPrice" label="Monthy Price (e.g., 0.03)" />
                </Col>
              </Row>
            </Container>

            <Container fluid>
              <Row>
                <Col>
                  <Input name="setupPrice" label="Setup Price (e.g., 3.40)" />
                </Col>
                <Col>
                  <Input name="currency" label="Currency (e.g., U$)" />
                </Col>
              </Row>
            </Container>

            <Container fluid>
              <Stack direction="horizontal" className="justify-content-end">
                <Stack gap={4} direction="horizontal">
                  <Button variant="secondary">Cancel</Button>
                  <Button variant="primary">Save</Button>
                </Stack>
              </Stack>
            </Container>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
}
