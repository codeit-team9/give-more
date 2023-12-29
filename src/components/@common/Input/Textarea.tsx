import styles from './Textarea.module.css';

interface Props {
  placeholder?: string;
  name: string;
}

function Textarea({ placeholder = '입력', name }: Props) {
  return (
    <div className={styles.wrapper}>
      <p>{name}</p>
      <textarea className={styles.textarea} placeholder={placeholder} />
    </div>
  );
}

export default Textarea;
