import React from 'react';
import Input from './Input';
import styles from './Input.module.css';

function WorkInput() {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  };

  return (
    <div className={styles.positionWrapper}>
      <Input name="업무 시간*" maxLength={3} onChangeInput={onChangeInput} />
      <p className={styles.innerText}>시간</p>
    </div>
  );
}

export default WorkInput;
