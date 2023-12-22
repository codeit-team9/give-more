import React from 'react';
import Input from './Input';

function WorkInput() {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  };

  return (
    <div>
      <Input name="업무 시간*" maxLength={3} innerText="시간" onChangeInput={onChangeInput} />
    </div>
  );
}

export default WorkInput;
