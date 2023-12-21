import React, { useState } from 'react';
import styles from './Input.module.css';
import Input from './Input';

function EmailInput() {
  const [errorMsg, setErrorMsg] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    const EmaliRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!EmaliRegex.test(InputValue)) {
      setErrorMsg('잘못된 이메일입니다.');
    } else {
      setErrorMsg('');
    }
  };

  return (
    <>
      <Input placeholder="입력" name="이메일" onChangeInput={onChangeInput} />
      <p className={styles.errorMsg}>{errorMsg}</p>
    </>
  );
}

export default EmailInput;
