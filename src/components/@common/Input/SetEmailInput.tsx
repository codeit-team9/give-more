import React, { useState } from 'react';
import Input from './Input';
import useSignup from '@/hooks/useSignup';

function SetEmailInput() {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { setEmail, setIsInput } = useSignup();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const InputValue = e.target.value;
    const EmaliRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (InputValue === '') {
      setErrorMsg('');
      setIsError(false);
      setIsInput(false);
    } else if (!EmaliRegex.test(InputValue)) {
      setErrorMsg('이메일 형식으로 작성해주세요.');
      setIsError(true);
      setIsInput(false);
    } else {
      setErrorMsg('');
      setIsError(false);
      setEmail(InputValue);
      setIsInput(true);
    }
  };

  return <Input name="이메일" isError={isError} onChangeInput={onChangeInput} errorMsg={errorMsg} />;
}

export default SetEmailInput;
