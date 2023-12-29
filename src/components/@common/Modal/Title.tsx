import styles from './Title.module.css';

interface Props {
  type: 'filter' | 'notification';
  count?: number | null;
}

function Title({ type, count }: Props) {
  const formattedCount = count ? `${count}개` : '';

  const title = {
    filterText: '상세 필터',
    notificationText: `알림 ${formattedCount}`,
  };

  const isFilter = type === 'filter';

  const titleText = isFilter ? title.filterText : title.notificationText;

  return <h1 className={styles.title}>{titleText}</h1>;
}

export default Title;
