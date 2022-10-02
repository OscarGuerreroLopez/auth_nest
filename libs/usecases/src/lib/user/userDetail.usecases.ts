import { UserDetail, UserDetailRepository, ILogger } from '@auth/domain';

export class GetUserDetailUseCases {
  constructor(private readonly userDetailRepository: UserDetailRepository) {}

  async execute(email: string): Promise<UserDetail | void> {
    return await this.userDetailRepository.getUserByEmail(email);
  }
}

export class InsertUserDetailUseCases {
  constructor(
    private readonly logger: ILogger,
    private readonly userDetailRepository: UserDetailRepository
  ) {}

  async execute(userDetail: UserDetail): Promise<UserDetail> {
    const result = await this.userDetailRepository.insertUser(userDetail);
    this.logger.log('UserDetailUseCase', `User ${userDetail.email} added`);

    return result;
  }
}
