import styles from './Textarea.module.css';

interface Props {
  placeholder?: string;
  name: string;
  onChangeInput?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea({ placeholder = '입력', name, onChangeInput }: Props) {
  return (
    <div className={styles.wrapper}>
      <p>{name}</p>
      <textarea className={styles.textarea} placeholder={placeholder} onChange={onChangeInput} />
    </div>
  );
}

export default Textarea;
