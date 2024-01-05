import classNames from 'classnames';
import NoticeCard from '../NoticeCard/NoticeCard';
import formatWorkTime from '@/utils/formatWorkTime';
import { Notice } from '@/@types/notice.types';
import styles from './NoticeList.module.css';
import NotFoundNotice from '../NotFoundNotice/NotFoundNotice';

interface Props {
  type: 'customized' | 'entire' | 'owner';
  items?: Notice[];
  count: number;
  shopId?: string;
  imageUrl?: string;
  name?: string;
  address1?: string;
  originalHourlyPay?: number;
}

function NoticeList({ type, items, count, shopId, imageUrl, name, address1, originalHourlyPay }: Props) {
  return (
    <ul className={classNames(styles.wrapper, styles[type])}>
      {items && items?.length > 0 ? (
        // eslint-disable-next-line array-callback-return, consistent-return
        items.slice(0, count).map((notice: Notice) => {
          if (type !== 'owner') {
            const { id: noticeId, hourlyPay, startsAt, workhour, closed, shop } = notice.item;
            // eslint-disable-next-line @typescript-eslint/no-shadow
            const { id: shopId, name, address1, imageUrl, originalHourlyPay } = shop.item;

            const formattedWorkTime = formatWorkTime({ type: 'notice', startsAt, workHour: workhour });

            return (
              <li key={noticeId}>
                <NoticeCard
                  noticeId={noticeId}
                  shopId={shopId}
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
          }

          const { id: noticeId, closed, hourlyPay, startsAt, workhour } = notice.item;

          const formattedWorkTime = formatWorkTime({ type: 'notice', startsAt, workHour: workhour });
          return (
            <li key={noticeId}>
              <NoticeCard
                noticeId={noticeId}
                shopId={shopId}
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
