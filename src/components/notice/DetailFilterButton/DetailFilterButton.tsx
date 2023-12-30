import styles from './DetailFilterButton.module.css';

interface Props {
  count: number | null;
  onClick: () => void;
}

function DetailFilterButton({ count, onClick }: Props) {
  const countText = count ? ` (${count})` : '';

  return (
    <button className={styles.button} type="button" onClick={onClick}>
      상세 필터{countText}
    </button>
  );
}

export default DetailFilterButton;
