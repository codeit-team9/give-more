export type UserType = 'employee' | 'employer';

export interface Item {
  id: string;
  email: string;
  type: UserType;
  name: string;
  phone: string;
  address: string;
  bio: string;
  shop: string | null;
}

export interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
  body?: {
    name: string;
    phone: string;
    address: string;
    bio: string;
  };
  query?: {
    offset: number | 'undefined';
    limit: number | 'undefined';
  };
}

export interface UserData {
  item: Item;
  links: Link[];
}
