import classNames from 'classnames';
import styles from './Input.module.css';

interface Props {
  placeholder?: string;
  name: string;
  isError?: boolean;
  type?: string;
  maxLength?: number;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder = '입력', name, isError, type, maxLength, onChangeInput }: Props) {
  return (
    <div className={styles.wrapper}>
      <p>{name}</p>
      <input
        className={classNames(styles.input, isError ? styles.error : '')}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        onChange={onChangeInput}
      />
    </div>
  );
}

export default Input;
