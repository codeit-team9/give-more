import styles from './Input.module.css';

interface Props {
  placeholder: string;
  name: string;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder = '입력', name, onChangeInput }: Props) {
  return (
    <div className={styles.wrapper}>
      <p>{name}</p>
      <input className={styles.input} placeholder={placeholder} onChange={onChangeInput} />
    </div>
  );
}

export default Input;
