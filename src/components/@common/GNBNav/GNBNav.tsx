/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import LogoButton from '@/components/@common/LogoButton/LogoButton';
import SearchBar from '@/components/@common/SearchBar/SearchBar';
import GNBMenuButton from '@/components/@common/GNBMenuButton/GNBMenuButton';
import NotificationButton from '@/components/@common/NotificationButton/NotificationButton';
import useNotification from '@/hooks/useNotification';
import NotificationModal from '../Modal/NotificationModal/NotificationModal';
import useModal from '@/hooks/useModal';
import styles from './GNBNav.module.css';

interface Props {
  userType?: 'employer' | 'employee' | undefined;
}
// 다시 수정해야함 !!!!!!!!!!!!!!!!!!!!
function GNBNav({ userType }: Props) {
  const [inputValue, setInputValue] = useState('');
  const [token, setToken] = useState<string>('');
  const { isActive } = useNotification();
  const { isOpenModal, toggleModal, closeModal } = useModal();

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('token');
      if (item) {
        setToken(item);
      }
    }
  }, [token]);

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
          <button type="button" onClick={handleSignOut}>
            <GNBMenuButton type="signOut" />
          </button>
          <div className={styles.NotificationButtonContainer}>
            <NotificationButton active={isActive} onClick={() => toggleModal()} />
            {/* {isOpenModal && <NotificationModal type="notification" onClose={closeModal} count={0} data={undefined} />} */}
          </div>
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
