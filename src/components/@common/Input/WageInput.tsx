import React from 'react';
import Input from './Input';

function WageInput() {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, '').replace(/([0-9]{1,3})([0-9]{3})/g, '$1,$2');
  };

  return <Input name="시급*" maxLength={7} innerText="원" onChangeInput={onChangeInput} />;
}

export default WageInput;
