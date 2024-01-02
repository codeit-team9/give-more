import Checked from '@/assets/images/checked_icon.svg';
import Primary from '@/assets/images/primary_icon.svg';
import styles from './UserTypeButton.module.css';

function CheckedIcon() {
  return (
    <div className={styles.checkedWrapper}>
      <Primary />
      <Checked className={styles.checked} />
    </div>
  );
}

export default CheckedIcon;
