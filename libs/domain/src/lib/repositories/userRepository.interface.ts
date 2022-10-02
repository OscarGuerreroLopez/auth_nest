import { UserM } from '../model/user';

export interface UserRepository {
  getUserByEmail(email: string): Promise<UserM | void>;
  updateLastLogin(email: string): Promise<void>;
  updateRefreshToken(email: string, refreshToken: string): Promise<void>;
}
