import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

import styles from './styles.module.scss';

export function AddButton() {
  return (
    <Button bsPrefix={styles.addButton}>
      <FaPlus />
      NEW NUMBER
    </Button>
  );
}
