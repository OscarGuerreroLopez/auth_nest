import { UserDetail } from '../model/userDetail';

export interface UserDetailRepository {
  getUserByEmail(email: string): Promise<UserDetail | void>;
  insertUser(user: UserDetail): Promise<UserDetail>;
  //   getUsersByEmail(): Promise<UserDetail[]>;
  //   getUserbyId(id: number): Promise<UserDetail>;
  //   updateUser(user: UserDetail): Promise<void>;
  //   deleteUser(email: string): Promise<void>;
}
