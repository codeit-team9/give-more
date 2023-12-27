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
      {page === 'owner' || page === 'notice' ? (
        <div className={styles.menuWrapper}>
          <GNBMenuButton text={page === 'owner' ? '내 가게' : '내 프로필'} />
          <GNBMenuButton text="로그아웃" />
          <NotificationButton active={isActive} />
        </div>
      ) : (
        <div className={styles.menuWrapper}>
          <GNBMenuButton text="로그인" />
          <GNBMenuButton text="회원가입" />
        </div>
      )}
    </div>
  );
}

export default GNBNav;
