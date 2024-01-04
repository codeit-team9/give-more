import React, { useState } from 'react';
import styles from './Input.module.css';
import Input from './Input';
import useSignup from '@/hooks/useSignup';

function SetPasswordInput() {
  const [isError, setIsError] = useState(false);
  const [isConfirmError, setIsConfirmError] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [confirmErrorMsg, setConfirmErrorMsg] = useState('');
  const { setPassword: setGlobalPassword, setIsPassword } = useSignup();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const InputValue = e.target.value;
    const PwRegex = /^[0-9a-zA-Z]{8,100}$/;
    if (InputValue === '') {
      setErrorMsg('');
      setIsError(false);
      setIsPassword(false);
    } else if (!PwRegex.test(InputValue)) {
      setErrorMsg('8자 이상 입력해 주세요.');
      setIsError(true);
      setIsPassword(false);
    } else {
      setErrorMsg('');
      setIsError(false);
      setGlobalPassword(InputValue);
    }
  };

  const onCheckInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    if (InputValue === '') {
      setConfirmErrorMsg('');
      setIsConfirmError(false);
      setIsPassword(false);
    } else if (password !== InputValue) {
      setConfirmErrorMsg('비밀번호가 일치하지 않습니다.');
      setIsConfirmError(true);
      setIsPassword(false);
    } else {
      setConfirmErrorMsg('');
      setIsConfirmError(false);
      setIsPassword(true);
    }
  };

  return (
    <div className={styles.passwordWrapper}>
      <Input name="비밀번호" isError={isError} type="password" onChangeInput={onChangeInput} errorMsg={errorMsg} />
      <Input
        name="비밀번호 확인"
        isError={isConfirmError}
        type="password"
        onChangeInput={onCheckInput}
        errorMsg={confirmErrorMsg}
      />
    </div>
  );
}

export default SetPasswordInput;
