import styles from './Input.module.css';

interface Props {
  placeholder: string;
  type: string;
}

function Input({ placeholder = '입력', type }: Props) {
  return (
    <div className={styles.wrapper}>
      <p>{type}</p>
      <input className={styles.input} placeholder={placeholder} />
    </div>
  );
}

export default Input;
