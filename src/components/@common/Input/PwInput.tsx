import React, { useState } from 'react';
import styles from './Input.module.css';
import Input from './Input';

function PwInput() {
  const [isError, setIsError] = useState(false);
  const [pwErrorMsg, setPwErrorMsg] = useState('');

  const onChangePwInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    const PwRegex = /^[0-9a-zA-Z]{8,100}$/;
    if (!PwRegex.test(InputValue)) {
      setPwErrorMsg('8자 이상 입력해 주세요.');
      setIsError(true);
    } else {
      setPwErrorMsg('');
      setIsError(false);
    }
  };

  return (
    <>
      <Input name="비밀번호" isError={isError} type="password" onChangeInput={onChangePwInput} />
      <p className={styles.errorMsg}>{pwErrorMsg}</p>
    </>
  );
}

export default PwInput;
