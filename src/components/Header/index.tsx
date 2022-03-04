import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import { Flex, Box, Icon } from '@chakra-ui/react';
import Avatar from 'react-avatar';
import {
  RiSearchLine,
  RiAddCircleLine,
  RiNotificationLine,
} from 'react-icons/ri';
import classNames from 'classnames';

import { Stack } from '../Stack';
import logoImg from '../../assets/images/logo.png';
import styles from './styles.module.scss';

const imageContainer = classNames(
  'd-flex',
  'flex-column',
  'align-items-start',
  'justify-content-start',
  'w-64',
  'p-auto',
);

const searchInputContainer = classNames('mw-100', 'p-0', 'm-0');
const searchInputLabel = classNames(
  'd-flex',
  'flex',
  'align-self-center',
  'position-relative',
  'align-items-center',
  'rounded-pill',
  'py-1',
  'px-8',
  'text-gray-200',
  'bg-gray-800',
);
const searchInputContent = classNames(
  'w-100',
  'py-4',
  'text-truncate',
  'bg-transparent',
  'text-gray-100',
);

export function Header() {
  return (
    <Container fluid className="d-flex align-items-center mt-7 mb-7">
      <Row
        as="header"
        lg={3}
        md={3}
        sm={2}
        style={{ maxWidth: 1480 }}
        className="d-flex w-100 mx-auto mt-4 align-items-center"
      >
        <Col sm={1} className={imageContainer}>
          <Image src={logoImg} alt="Evolux logo" />
          <strong className={classNames('d-inline-block', 'mt-3')}>
            Telecom <span style={{ color: '#E4AD2D' }}>Carrier</span>
          </strong>
        </Col>

        <Col sm={3} className={searchInputContainer}>
          <Form.Label className={searchInputLabel}>
            <Form.Control
              bsPrefix={styles.customInput}
              className={searchInputContent}
              placeholder="Search in the platform..."
            />
            <Icon as={RiSearchLine} fontSize="20" />
          </Form.Label>
        </Col>

        <Col
          className={classNames(
            'd-flex',
            'align-items-center',
            'ms-auto',
            'justify-content-end',
          )}
        >
          <Stack
            direction="horizontal"
            gap={8}
            className={classNames(
              'align-items-center',
              'justify-content-center',
              'm-8',
              'pe-8',
              'text-gray-300',
              'border-end',
              'border-gray-700',
              'border-2',
            )}
          >
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiAddCircleLine} fontSize="20" />
          </Stack>
          <Flex align="center">
            <Box className={classNames('me-4', 'text-end')}>
              <p className={classNames('fs-lg', 'mb-2')}>Samuel Cabral</p>
              <p className={classNames('text-gray-500', 'fs-sm', 'mb-0')}>
                samuelcabral.mail@gmail.com
              </p>
            </Box>

            <Avatar
              color="#E4AD2D"
              round
              size="60"
              name="Samuel Cabral"
              src="https://github.com/samuel-cabral.png"
            />
          </Flex>
        </Col>
      </Row>
    </Container>
  );
}
