import Input from './Input';
import styles from './Input.module.css';

function HourlyPayInput() {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, '').replace(/([0-9]{1,3})([0-9]{3})/g, '$1,$2');
  };

  return (
    <>
      <Input name="시급*" placeholder="입력" maxLength={7} onChangeInput={onChangeInput} />
      <p className={styles.innerText}>원</p>
    </>
  );
}

export default HourlyPayInput;
