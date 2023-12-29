export interface ApplicationItem {
  id: string;
  status: string;
}

export interface Application {
  item: ApplicationItem;
  href: string;
}

export interface ShopItem {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

export interface Shop {
  item: ShopItem;
  href: string;
}

export interface NoticeItem {
  id: string;
  hourlyPay: number;
  description: string;
  startsAt: string;
  workhour: number;
  closed: boolean;
}

export interface Notice {
  item: NoticeItem;
  href: string;
}

export interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
}

export interface Item {
  item: {
    id: string;
    createdAt: string;
    result: 'accepted' | 'rejected';
    read: boolean;
    application: Application;
    shop: Shop;
    notice: Notice;
  };
  links: Link[];
}

export interface Items {
  items: Item[];
}
