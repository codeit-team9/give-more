export interface RootObject {
  data: ApplyListData;
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
export interface ApplyListData {
  offset: number;
  limit: number;
  count: number;
  hasNext: boolean;
  items: Item[];
  links: Link2[];
}

export interface Item {
  item: Item2;
  links: Link[];
}

export interface Item2 {
  id: string;
  status: string;
  createdAt: string;
  user: User;
  shop: Shop;
  notice: Notice;
}

export interface User {
  item: Item3;
  href: string;
}

export interface Item3 {
  id: string;
  email: string;
  type: string;
  name: string;
  phone: string;
  address: string;
  bio: string;
}

export interface Shop {
  item: Item4;
  href: string;
}

export interface Item4 {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

export interface Notice {
  item: Item5;
  href: string;
}

export interface Item5 {
  id: string;
  hourlyPay: number;
  description: string;
  startsAt: string;
  workhour: number;
  closed: boolean;
}

export interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
  body: Body;
}

export interface Body {
  status: string;
}

export interface Link2 {
  rel: string;
  description: string;
  method: string;
  href: string;
}
