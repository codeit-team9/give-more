import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import styles from './owner.module.css';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import ClosedIcon from '@/assets/images/close_icon.svg';
import Input from '@/components/@common/Input/Input';
import Dropdown from '@/components/@common/DropDown/Dropdown';
import { CATEGORY, LOCATIONS } from '@/constants/constants';
import Textarea from '@/components/@common/Input/Textarea';
import Toast from '@/components/@common/Toast/Toast';
import useOwnerRegist from '@/hooks/useOwnerRegist';
import useDropdown from '@/hooks/useDropdown';
import useAsync from '@/hooks/useAsync';
import postShop from '@/api/postShop';
import useLoginInfo from '@/hooks/useLoginInfo';
import StoreImageInput from '@/components/@common/Input/StoreImageInput';

function Registration() {
  const [isRegist, setIsRegist] = useState(false);
  const [canRegist, setCanRegist] = useState(false);
  const { name, specAddress, bio, pay, setName, setBio, setSpecAddress, setPay } = useOwnerRegist();
  const { execute } = useAsync(postShop);
  const { selectedLocation, setSelectedLocation, toggleDropdown, isOpenDropdown, closeDropdown, setCategory } =
    useDropdown({});
  const {
    selectedLocation: selectedLocation2,
    setSelectedLocation: setSelectedLocation2,
    toggleDropdown: toggleDropdown2,
    isOpenDropdown: isOpenDropdown2,
    closeDropdown: closeDropdown2,
    setCategory: setCategory2,
  } = useDropdown({});
  const { token } = useLoginInfo();
  const router = useRouter();
  const [uploadedImage, setUploadedImage] = useState('');

  const handleImageChange = (file: string) => {
    setUploadedImage(file);
  };

  const Props = {
    authorization: { token },
    data: {
      name,
      category: selectedLocation,
      address1: selectedLocation2,
      address2: specAddress,
      description: bio,
      imageUrl: uploadedImage,
      originalHourlyPay: pay,
    },
  };

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute(Props);
    if (response.status === 200) {
      setIsRegist(true);
      setTimeout(() => {
        setIsRegist(false);
        router.push('/owner/detail');
      }, 3000);
    }
  };

  const handleRegist = () => {
    if (canRegist) {
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

  const onChangeAddressInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    if (InputValue === '') {
      setCanRegist(false);
    } else {
      setSpecAddress(InputValue);
      setCanRegist(true);
    }
  };

  const onChangePayInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    if (InputValue === '') {
      setCanRegist(false);
    } else {
      const numberWithNoComma: number = parseInt(InputValue.replace(/,/g, ''), 10);
      setPay(numberWithNoComma);
      setCanRegist(true);
      e.target.value = e.target.value.replace(/\D/g, '').replace(/([0-9]{1,3})([0-9]{3})/g, '$1,$2');
    }
  };

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const InputValue = e.target.value;
    setBio(InputValue);
  };

  return (
    <>
      <GNBNav userType="employer" />
      <div className={styles.wrapper}>
        <div className={styles.middleWrapper}>
          <div className={styles.myProfile}>
            <p>가게 정보</p>
            <Link href="/owner">
              <ClosedIcon />
            </Link>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.storeNameInput}>
              <Input name="가게 이름*" onChangeInput={onChangeNameInput} />
            </div>
            <div className={styles.shopDropdown}>
              <Dropdown
                title="분류"
                toggleDropdown={toggleDropdown}
                isOpenDropdown={isOpenDropdown}
                closeDropdown={closeDropdown}
                setCategory={setCategory}
                selectedLocation={selectedLocation}
                item={CATEGORY}
                setSelectedLocation={setSelectedLocation}
              />
            </div>
            <div className={styles.addressDropdown}>
              <Dropdown
                title="주소"
                toggleDropdown={toggleDropdown2}
                isOpenDropdown={isOpenDropdown2}
                closeDropdown={closeDropdown2}
                setCategory={setCategory2}
                selectedLocation={selectedLocation2}
                item={LOCATIONS}
                setSelectedLocation={setSelectedLocation2}
              />
            </div>
            <div className={styles.specificAdInput}>
              <Input name="상세 주소*" onChangeInput={onChangeAddressInput} />
            </div>
            <div className={styles.payInput}>
              <div style={{ position: 'relative', maxHeight: '9.2rem' }}>
                <Input name="기본 시급*" maxLength={7} onChangeInput={onChangePayInput} />
                <p className={styles.innerText}>원</p>
              </div>
            </div>
            <div className={styles.imgInput}>
              <StoreImageInput
                name="가게 이미지"
                imgURL={uploadedImage}
                onImageChange={handleImageChange}
                store={name}
              />
            </div>
            <div className={styles.textarea}>
              <Textarea name="가게 설명" onChangeInput={onChangeTextarea} />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <div className={styles.registButton}>
              <PrimaryButton text="등록하기" onClick={handleRegist} />
            </div>
          </div>
        </div>
      </div>
      {isRegist && (
        <div className={styles.toast}>
          <Toast type="accepted" />
        </div>
      )}
    </>
  );
}

export default Registration;
