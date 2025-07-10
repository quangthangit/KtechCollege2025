export type RoleType = {
  id: number;
  name: string;
};

export type LoggedInUserType = {
  id: number;
  email: string;
  isActive: boolean;
  roles: RoleType[];
};

export type AuthResponseType = {
  loggedInUser: LoggedInUserType;
  access_token: string;
  refresh_token: string;
};
