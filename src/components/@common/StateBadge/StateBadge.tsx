import styles from './StateBadge.module.css';

interface Props {
  type: 'accept' | 'reject' | 'pending';
}

const STATUS_INFO = {
  accept: { className: styles.accept, text: '승인 완료' },
  reject: { className: styles.reject, text: '거절' },
  pending: { className: styles.pending, text: '대기중' },
};

function StateBadge({ type }: Props) {
  const { className, text } = STATUS_INFO[type] || { className: '', text: '' };

  return (
    <div className={styles.wrapper}>
      <div className={className}>{text}</div>
    </div>
  );
}

export default StateBadge;
