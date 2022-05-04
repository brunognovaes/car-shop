export interface ICreateUserService {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface IUsersService {
  create(user: ICreateUserService): Promise<IUser>;
}
