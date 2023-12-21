import React, { useState } from 'react';
import styles from './Input.module.css';
import Input from './Input';

function PwInput() {
  const [pwValue, setPwValue] = useState('');
  const [pwErrorMsg, setPwErrorMsg] = useState('');
  //   const [pwCheckErrorMsg, setPwCheckErrorMsg] = useState('');

  const onChangePwInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwValue(e.target.value);
    const PwRegex = /^[0-9a-zA-z]{8,100}$/;
    if (!PwRegex.test(pwValue)) {
      setPwErrorMsg('8자 이상 입력해 주세요.');
    } else {
      setPwErrorMsg('');
    }
  };

  //   const onChangePwCheckInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const InputValue = e.target.value;
  //     if (InputValue !== pwValue) {
  //       setPwCheckErrorMsg('비밀번호가 일치하지 않습니다.');
  //     } else {
  //       setPwCheckErrorMsg('');
  //     }
  //   };

  return (
    <>
      <Input name="비밀번호" type="password" onChangeInput={onChangePwInput} />
      <p className={styles.errorMsg}>{pwErrorMsg}</p>
      {/* <Input name="비밀번호 확인" type="password" onChangeInput={onChangePwCheckInput} />
      <p className={styles.errorMsg}>{pwCheckErrorMsg}</p> */}
    </>
  );
}

export default PwInput;
