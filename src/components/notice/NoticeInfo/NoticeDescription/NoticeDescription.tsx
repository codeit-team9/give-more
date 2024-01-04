import styles from './NoticeDescription.module.css';

interface Props {
  description: string;
}

function NoticeDescription({ description }: Props) {
  return (
    <div className={styles.wrapper}>
      <h3>공고 설명</h3>
      <p className={styles.noticeDescription}>{description}</p>
    </div>
  );
}

export default NoticeDescription;
