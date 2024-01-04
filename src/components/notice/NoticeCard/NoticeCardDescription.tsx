import classNames from 'classnames';
import styles from './NoticeCardDescription.module.css';
import { getIconByType } from '@/utils/getIconByType';

interface Props {
  type: 'duration' | 'address';
  description: string;
  isClosed: boolean;
}

function NoticeCardDescription({ type, description, isClosed }: Props) {
  const IconComponent = getIconByType({ isClosed, type });

  const closedNoticeClass = isClosed && styles.lastNotice;

  return (
    <div className={classNames(styles.wrapper, closedNoticeClass)}>
      <IconComponent />
      {description}
    </div>
  );
}

export default NoticeCardDescription;
