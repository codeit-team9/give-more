import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import styles from './profile.module.css';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import Footer from '@/components/@common/Footer/Footer';
import ClosedIcon from '@/assets/images/close_icon.svg';
import Input from '@/components/@common/Input/Input';
import Dropdown from '@/components/@common/DropDown/Dropdown';
import { LOCATIONS } from '@/constants/constants';
import Textarea from '@/components/@common/Input/Textarea';
import Toast from '@/components/@common/Toast/Toast';
import useRegist from '@/hooks/useRegist';
import useDropdown from '@/hooks/useDropdown';
import useAsync from '@/hooks/useAsync';
import extractUserIdFromJWT from '@/utils/extractUserIdFromJWT';
import putUser from '@/api/putUser';
import useUserInfo from '@/hooks/useUserInfo';

function Registration() {
  const [isRegist, setIsRegist] = useState(false);
  const [canRegist, setCanRegist] = useState(false);
  const [canRegist2, setCanRegist2] = useState(false);
  const { name, phone, bio, setName, setPhone, setBio } = useRegist();
  const { execute } = useAsync(putUser);
  const { selectedLocation, setSelectedLocation, toggleDropdown, isOpenDropdown, closeDropdown, setCategory } =
    useDropdown({});
  const [token, setToken] = useState<string>('');
  const router = useRouter();
  const { name: userName, phone: userPhone, bio: userBio } = useUserInfo();

  const Props = () => ({
    authorization: { token },
    url: { userId: extractUserIdFromJWT(token) },
    data: {
      name,
      phone,
      address: selectedLocation,
      bio,
    },
  });

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute(Props());
    if (response.status === 200) {
      setIsRegist(true);
      setTimeout(() => {
        setIsRegist(false);
        router.push('/profile/detail');
      }, 3000);
    }
  };

  const handleRegist = () => {
    if (canRegist && canRegist2) {
      fetch();
    } else {
      alert('양식에 맞추어 입력해주세요.');
    }
  };

  const onChangeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    if (InputValue === '') {
      setCanRegist(false);
    } else {
      setName(InputValue);
      setCanRegist(true);
    }
  };

  const onChangePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const PhoneRegex = /^\d{2,3}-?\d{3,4}-?\d{4}$/;
    e.target.value = e.target.value
      .replace(/\D/g, '')
      .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, '$1-$2-$3');
    const InputValue = e.target.value;
    if (InputValue === '') {
      setCanRegist2(false);
    } else if (!PhoneRegex.test(InputValue)) {
      setCanRegist2(false);
    } else {
      setPhone(InputValue);
      setCanRegist2(true);
    }
  };

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const InputValue = e.target.value;
    setBio(InputValue);
  };

  useEffect(() => {
    if (token === '') {
      const item = localStorage.getItem('token');

      if (item) {
        setToken(item);
      }
    }
  }, [token]);

  return (
    <>
      <GNBNav userType="employee" />
      <div className={styles.wrapper}>
        <div className={styles.middleWrapper}>
          <div className={styles.myProfile}>
            <p>내 프로필</p>
            <Link href="/profile">
              <ClosedIcon />
            </Link>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.nameInput}>
              <Input name="이름*" onChangeInput={onChangeNameInput} placeholder={userName === '' ? '입력' : userName} />
            </div>
            <div className={styles.phoneInput}>
              <Input
                name="연락처*"
                maxLength={13}
                onChangeInput={onChangePhoneInput}
                placeholder={userName === '' ? '-를 제외한 전화번호를 입력해 주세요.' : userPhone}
              />
            </div>
            <div className={styles.dropdown}>
              <Dropdown
                title="선호 지역"
                toggleDropdown={toggleDropdown}
                isOpenDropdown={isOpenDropdown}
                closeDropdown={closeDropdown}
                setCategory={setCategory}
                selectedLocation={selectedLocation}
                item={LOCATIONS}
                setSelectedLocation={setSelectedLocation}
              />
            </div>
            <div className={styles.textarea}>
              <Textarea name="소개" onChangeInput={onChangeTextarea} placeholder={userBio === '' ? '입력' : userBio} />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.registButton}>
              <PrimaryButton text="등록하기" onClick={handleRegist} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {isRegist && (
        <div className={styles.toast}>
          <Toast type="accepted" />
        </div>
      )}
    </>
  );
}

export default Registration;
