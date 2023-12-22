import classNames from 'classnames';
import styles from './PostCardDescription.module.css';
import { getIconByType } from '@/utils/getIconByType';

interface Props {
  type: 'period' | 'path';
  description: string;
  isClosed: boolean;
}

function PostCardDescription({ type, description, isClosed }: Props) {
  const IconComponent = getIconByType({ isClosed, type });

  const closedNoticeClass = isClosed && styles.lastNotice;

  return (
    <div className={classNames(styles.wrapper, closedNoticeClass)}>
      <IconComponent />
      {description}
    </div>
  );
}

export default PostCardDescription;
