interface UserInfo {
  email: string;
  password: string;
}

type UserType = 'employee' | 'employer';

interface NewUserInfo extends UserInfo {
  userType: UserType;
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

interface ApplyData extends ShopId, NoticeId {}

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

interface NoticeSearch extends Pagenation {
  address?: string;
  keyword?: string;
  startsAtGte?: string;
  hourlyPayGte?: string;
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
  UserId,
  ShopId,
  NoticeId,
  ApplyData,
  NewShopData,
  Pagenation,
  NoticeSearch,
  NewNoticeData,
};
