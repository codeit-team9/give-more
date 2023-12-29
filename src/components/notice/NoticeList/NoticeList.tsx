import classNames from 'classnames';
import PostCard from '../NoticeCard/NoticeCard';
import styles from './NoticeList.module.css';
import formatWorkTime from '@/utils/formatWorkTime';
import { Notice } from '@/@types/notice.types';

interface Props {
  type: 'customized' | 'entire';
  items: Notice[];
  count: number;
}

function NoticeList({ type, items, count }: Props) {
  return (
    <ul className={classNames(styles.wrapper, styles[type])}>
      {items.slice(0, count).map((notice: Notice) => {
        const { id, hourlyPay, startsAt, workhour, closed, shop } = notice.item;
        const { name, address1, imageUrl, originalHourlyPay } = shop.item;

        const formattedWorkTime = formatWorkTime({ type: 'notice', startsAt, workHour: workhour });

        // eslint-disable-next-line consistent-return
        return (
          <li key={id}>
            <PostCard
              cardImageUrl={imageUrl}
              restaurantName={name}
              duration={formattedWorkTime}
              address={address1}
              defaultHourlyPay={originalHourlyPay}
              currentHourlyPay={hourlyPay}
              isClosed={closed}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default NoticeList;
