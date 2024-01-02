interface UserInfo {
  email: string;
  password: string;
}

type UserType = 'employee' | 'employer';

interface NewUserInfo extends UserInfo {
  type: UserType;
}

interface EditUserInfo {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

interface AlertId {
  alertId: string;
}

interface UserId {
  userId: string;
}

interface ShopId {
  shopId: string;
}

interface NoticeId {
  noticeId: string;
}

interface Status {
  status: 'accepted' | 'rejected';
}

interface ApplyData extends ShopId, NoticeId {}

interface Apply extends ShopId, NoticeId, Status {}

interface NotificationData extends UserId, AlertId {}

interface NewShopData {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

interface Pagenation {
  offset: number;
  limit: number;
}

type SortType = 'time' | 'pay' | 'hour' | 'shop';

interface NoticeSearch extends Pagenation {
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: number;
  sort?: SortType;
}

interface NewNoticeData {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
}

export type {
  UserInfo,
  UserType,
  NewUserInfo,
  EditUserInfo,
  UserId,
  ShopId,
  NoticeId,
  ApplyData,
  Apply,
  NotificationData,
  NewShopData,
  Pagenation,
  NoticeSearch,
  NewNoticeData,
};
