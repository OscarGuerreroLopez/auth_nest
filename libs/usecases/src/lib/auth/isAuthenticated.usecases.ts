import { UserM, UserWithoutPassword, UserRepository } from '@auth/domain';

export class IsAuthenticatedUseCases {
  constructor(private readonly adminUserRepo: UserRepository) {}

  async execute(email: string): Promise<UserWithoutPassword | void> {
    const result = await this.adminUserRepo.getUserByEmail(email);

    if (result) {
      const user: UserM = result;
      const { password, ...info } = user;
      return info;
    }
  }
}
