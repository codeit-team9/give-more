import React, { useState } from 'react';
import styles from './Input.module.css';
import Input from './Input';

function EmailInput() {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    const EmaliRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!EmaliRegex.test(InputValue)) {
      setErrorMsg('잘못된 이메일입니다.');
      setIsError(true);
    } else {
      setErrorMsg('');
      setIsError(false);
    }
  };

  return (
    <>
      <Input name="이메일" isError={isError} onChangeInput={onChangeInput} />
      <p className={styles.errorMsg}>{errorMsg}</p>
    </>
  );
}

export default EmailInput;
