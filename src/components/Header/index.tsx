import { Navbar, Container as HeaderContent, Figure } from 'react-bootstrap';
import logoImg from '../../assets/images/logo.png';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <HeaderContent className={styles.headerContent}>
        <Figure>
          <Figure.Image src={logoImg} alt="Evolux Logo" />
          <strong>Telecom Carrier</strong>
        </Figure>
        <Navbar>
          <Navbar.Brand className={styles.navbarBrand} href="#home">
            Home
          </Navbar.Brand>
          <Navbar.Brand className={styles.navbarBrand} href="#table">
            Numbers
          </Navbar.Brand>
        </Navbar>
      </HeaderContent>
    </header>
  );
}
