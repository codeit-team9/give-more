export interface RootObject {
  data: ApplyHistoryData;
  status: number;
  statusText: string;
  headers: Headers;
  config: Config;
  request: Env;
}
export interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Env;
  headers: Headers2;
  baseURL: string;
  method: string;
  url: string;
}
export interface Headers2 {
  Accept: string;
  Authorization: string;
}
export interface Env {}
export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}
export interface Headers {
  'cache-control': string;
  'content-type': string;
}
export interface ApplyHistoryData {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Item4[];
  links: Link[];
}
export interface Item4 {
  item: Item3;
  links: Link[];
}
export interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
}
export type Status = 'pending' | 'accept' | 'reject';
export interface Item3 {
  id: string;
  status: Status;
  createdAt: string;
  shop: Shop;
  notice: Notice;
}
export interface Notice {
  item: Item2;
  href: string;
}
export interface Item2 {
  id: string;
  hourlyPay: number;
  description: string;
  startsAt: string;
  workhour: number;
  closed: boolean;
}
export interface Shop {
  item: Item;
  href: string;
}
export interface Item {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}
