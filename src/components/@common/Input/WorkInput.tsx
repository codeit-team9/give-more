import React from 'react';
import classNames from 'classnames';
import Input from './Input';
import styles from './Input.module.css';

function WorkInput() {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, '');
  };

  return (
    <>
      <Input name="업무 시간*" maxLength={3} onChangeInput={onChangeInput} />
      <p className={classNames(styles.innerText, styles.work)}>시간</p>
    </>
  );
}

export default WorkInput;
