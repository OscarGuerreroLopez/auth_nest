import { UserM } from '../model/user';

export interface UserRepository {
  getUserByUsername(username: string): Promise<UserM | null>;
  updateLastLogin(username: string): Promise<void>;
  updateRefreshToken(username: string, refreshToken: string): Promise<void>;
}
