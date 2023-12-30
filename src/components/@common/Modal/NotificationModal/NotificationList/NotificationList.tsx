import { Items } from '@/@types/notification.type';
import NotificationCard from '../NotificationCard/NotificationCard';

interface Props {
  data: Items;
}

function NotificationList({ data }: Props) {
  return data.items.map((value) => {
    const { result, createdAt, read, shop, notice } = value.item;
    const { name } = shop.item;
    const { startsAt, workhour } = notice.item;

    if (read) return;

    // eslint-disable-next-line consistent-return
    return (
      <li>
        <NotificationCard
          status={result}
          restaurantName={name}
          startsAt={startsAt}
          workHour={workhour}
          createdAt={createdAt}
        />
      </li>
    );
  });
}

export default NotificationList;
