import { useState } from 'react';
import classNames from 'classnames';
import CheckedIcon from './CheckedIcon';
import Blanked from '@/assets/images/blanked_icon.svg';
import styles from './UserTypeButton.module.css';
import useSignup from '@/hooks/useSignup';

function UserTypeButton() {
  const [isSelected, setIsSelected] = useState(true);
  const { setIsUser } = useSignup();

  const handleSelected = () => {
    setIsSelected(!isSelected);
    if (isSelected) {
      setIsUser('employee');
    } else {
      setIsUser('employer');
    }
  };

  return (
    <div className={styles.container}>
      회원 유형
      <div className={styles.wrapper}>
        <button
          type="button"
          className={classNames(styles.button, isSelected ? styles.selected : styles.notSelected)}
          onClick={() => handleSelected()}
        >
          {isSelected ? <CheckedIcon /> : <Blanked />}
          <span>알바님</span>
        </button>
        <button
          type="button"
          className={classNames(styles.button, isSelected ? styles.notSelected : styles.selected)}
          onClick={() => handleSelected()}
        >
          {isSelected ? <Blanked /> : <CheckedIcon />}
          <span>사장님</span>
        </button>
      </div>
    </div>
  );
}

export default UserTypeButton;
