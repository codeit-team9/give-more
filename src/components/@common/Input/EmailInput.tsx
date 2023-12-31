import React, { useState } from 'react';
import Input from './Input';
import useSignin from '@/hooks/useSignin';
import styles from './Input.module.css';

function EmailInput() {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { setEmail } = useSignin();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    const EmaliRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (InputValue === '') {
      setErrorMsg('');
      setIsError(false);
    } else if (!EmaliRegex.test(InputValue)) {
      setErrorMsg('이메일 형식으로 작성해주세요.');
      setIsError(true);
    } else {
      setErrorMsg('');
      setIsError(false);
      setEmail(InputValue);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Input name="이메일" isError={isError} onChangeInput={onChangeInput} errorMsg={errorMsg} />
    </div>
  );
}

export default EmailInput;
