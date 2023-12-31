import React, { useState } from 'react';
import Input from './Input';
import useSignin from '@/hooks/useSignin';

function PasswordInput() {
  const [errorMsg, setErrorMsg] = useState('');
  const { setPassword } = useSignin();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const InputValue = e.target.value;
    const PwRegex = /^[0-9a-zA-Z]{8,100}$/;
    if (InputValue === '') {
      setErrorMsg('');
    } else if (!PwRegex.test(InputValue)) {
      setErrorMsg('8자 이상 입력해 주세요.');
    } else {
      setErrorMsg('');
      setPassword(InputValue);
    }
  };

  return <Input name="비밀번호" type="password" onChangeInput={onChangeInput} errorMsg={errorMsg} />;
}

export default PasswordInput;
