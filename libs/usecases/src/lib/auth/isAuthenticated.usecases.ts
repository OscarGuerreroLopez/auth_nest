import { UserM, UserWithoutPassword, UserRepository } from '@auth/domain';

export class IsAuthenticatedUseCases {
  constructor(private readonly adminUserRepo: UserRepository) {}

  async execute(username: string): Promise<UserWithoutPassword | void> {
    const result = await this.adminUserRepo.getUserByUsername(username);

    if (result) {
      const user: UserM = result;
      const { password, ...info } = user;
      return info;
    }
  }
}
