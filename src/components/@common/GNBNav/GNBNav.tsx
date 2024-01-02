import { useState } from 'react';
import LogoButton from '@/components/@common/LogoButton/LogoButton';
import SearchBar from '@/components/@common/SearchBar/SearchBar';
import GNBMenuButton from '@/components/@common/GNBMenuButton/GNBMenuButton';
import NotificationButton from '@/components/@common/NotificationButton/NotificationButton';
import styles from './GNBNav.module.css';

interface Props {
  userType?: 'employer' | 'employee';
  isActive: boolean;
}

function GNBNav({ userType, isActive }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <LogoButton isSign={false} />
      </div>
      <div className={styles.searchWrapper}>
        <SearchBar value={inputValue} onChange={handleInputChange} />
      </div>
      {userType === 'employer' || userType === 'employee' ? (
        <div className={styles.menuWrapper}>
          <GNBMenuButton type={userType} />
          <GNBMenuButton type="signOut" />
          <NotificationButton active={isActive} />
        </div>
      ) : (
        <div className={styles.menuWrapper}>
          <GNBMenuButton type="signIn" />
          <GNBMenuButton type="signUp" />
        </div>
      )}
    </div>
  );
}

export default GNBNav;
