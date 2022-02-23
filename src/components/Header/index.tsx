import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import {
  RiSearchLine,
  RiAddCircleLine,
  RiNotificationLine,
} from 'react-icons/ri';
import Avatar from 'react-avatar';

import { Stack } from '../Stack';

import logoImg from '../../assets/images/logo.png';

import styles from './styles.module.scss';

export function Header() {
  return (
    <Container className="d-flex align-items-center mt-7">
      <Row
        as="header"
        lg={3}
        md={3}
        sm={2}
        style={{ maxWidth: 1480 }}
        className="d-flex w-100 mx-auto mt-4 px-6 align-items-center"
      >
        <Col sm={1}>
          <Image src={logoImg} alt="Evolux logo" />
        </Col>

        <Col sm={3} className="mw-100">
          <Form.Label
            className={`${styles.searchInputLabel} d-flex align-items-center text-secondary rounded-pill py-2 px-8 ms-6 bg-dark`}
          >
            <Form.Control
              bsPrefix={`${styles.customInput} w-100 py-2 text-truncate`}
              className="bg-dark"
              placeholder="Buscar na plataforma"
            />
            <RiSearchLine size="20" />
          </Form.Label>
        </Col>

        <Col className="d-flex align-items-center justify-content-end">
          <Stack
            direction="horizontal"
            gap={8}
            className="border-end border-secondary text-secondary pe-8 my-5"
          >
            <RiNotificationLine size="20" />
            <RiAddCircleLine size="20" />
          </Stack>
          <Avatar
            round
            name="Samuel Cabral"
            size="70"
            color="#E4AD2D"
            className="ms-4"
          />
        </Col>
      </Row>
    </Container>
  );
}
