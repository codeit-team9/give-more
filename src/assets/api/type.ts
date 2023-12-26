interface UserTokenData {
  response: UserToken;
}

interface UserToken {
  token: string;
  user: User;
  links: string[];
}

interface NewUserData {
  response: NewUser;
}

interface NewUser {
  email: string;
  password: string;
  type: UserType;
}

interface User {
  item: UserItem;
  href: string;
}

interface UserItem {
  id: string;
  email: string;
  type: UserType;
  name: string;
  phone: string;
  address: string;
  bio: string;
}

type UserType = 'employee' | 'employer';

export type { UserTokenData, UserToken, NewUserData, NewUser, User, UserItem, UserType };
