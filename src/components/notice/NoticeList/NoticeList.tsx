import classNames from 'classnames';
import NoticeCard from '../NoticeCard/NoticeCard';
import formatWorkTime from '@/utils/formatWorkTime';
import { Notice } from '@/@types/notice.types';
import styles from './NoticeList.module.css';
import NotFoundNotice from '../NotFoundNotice/NotFoundNotice';

interface Props {
  type: 'customized' | 'entire';
  items?: Notice[];
  count: number;
}

function NoticeList({ type, items, count }: Props) {
  return (
    <ul className={classNames(styles.wrapper, styles[type])}>
      {items && items?.length > 0 ? (
        items.slice(0, count).map((notice: Notice) => {
          const { id, hourlyPay, startsAt, workhour, closed, shop } = notice.item;
          const { name, address1, imageUrl, originalHourlyPay } = shop.item;

          const formattedWorkTime = formatWorkTime({ type: 'notice', startsAt, workHour: workhour });

          return (
            <li key={id}>
              <NoticeCard
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
        })
      ) : (
        <NotFoundNotice />
      )}
    </ul>
  );
}

export default NoticeList;
