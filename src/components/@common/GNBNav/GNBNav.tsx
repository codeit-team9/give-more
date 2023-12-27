import { useState } from 'react';
import LogoButton from '@/components/@common/LogoButton/LogoButton';
import SearchBar from '@/components/@common/SearchBar/SearchBar';
import GNBMenuButton from '@/components/@common/GNBMenuButton/GNBMenuButton';
import NotificationButton from '@/components/@common/NotificationButton/NotificationButton';
import styles from './GNBNav.module.css';

interface Props {
  page: string;
  isActive: boolean;
}

function GNBNav({ page, isActive }: Props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <LogoButton />
      </div>
      <div className={styles.searchWrapper}>
        <SearchBar value={inputValue} onChange={handleInputChange} />
      </div>
      {page === 'employer' || page === 'employee' ? (
        <div className={styles.menuWrapper}>
          <GNBMenuButton type={page} />
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
