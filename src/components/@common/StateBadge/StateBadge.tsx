import styles from './StateBadge.module.css';

interface Props {
  type: 'accept' | 'reject' | 'pending';
}

function StateBadge({ type }: Props) {
  let badgeClassName;
  let badgeText;

  switch (type) {
    case 'accept':
      badgeClassName = styles.accept;
      badgeText = '승인 완료';
      break;
    case 'reject':
      badgeClassName = styles.reject;
      badgeText = '거절';
      break;
    case 'pending':
      badgeClassName = styles.pending;
      badgeText = '대기중';
      break;
    default:
      badgeClassName = '';
      badgeText = '';
      break;
  }

  return (
    <div className={styles.wrapper}>
      <div className={badgeClassName}>{badgeText}</div>
    </div>
  );
}

export default StateBadge;
