import { Navbar, Container as HeaderContent } from 'react-bootstrap';
import logoImg from '../../assets/images/logo.png';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <HeaderContent className={styles.headerContent}>
        <img src={logoImg} alt="Evolux Logo" />
        <Navbar>
          <Navbar.Brand className={styles.active} href="#home">
            Home
          </Navbar.Brand>
          <Navbar.Brand className={styles.navbarBrand} href="#table">
            Phone Numbers
          </Navbar.Brand>
        </Navbar>
      </HeaderContent>
    </header>
  );
}
