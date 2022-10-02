import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserM, UserRepository } from '@auth/domain';

import { User } from '../entities/user.entity';
import { ExceptionsService } from '../exceptions';

@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userEntityRepository: Repository<User>,
    private readonly exceptionService: ExceptionsService
  ) {}
  async updateRefreshToken(email: string, refreshToken: string): Promise<void> {
    await this.userEntityRepository.update(
      {
        email,
      },
      { hach_refresh_token: refreshToken }
    );
  }
  async getUserByEmail(email: string): Promise<UserM | void> {
    const adminUserEntity = await this.userEntityRepository.findOne({
      where: {
        email,
      },
    });
    if (!adminUserEntity) {
      return this.exceptionService.userNotFound({
        message: `user ${email} not found`,
      });
    } else {
      return this.toUser(adminUserEntity);
    }
  }
  async updateLastLogin(email: string): Promise<void> {
    await this.userEntityRepository.update(
      {
        email,
      },
      { last_login: () => 'CURRENT_TIMESTAMP' }
    );
  }

  private toUser(adminUserEntity: User): UserM {
    const adminUser: UserM = new UserM();

    adminUser.id = adminUserEntity.id;
    adminUser.email = adminUserEntity.email;
    adminUser.password = adminUserEntity.password;
    adminUser.createDate = adminUserEntity.createdate;
    adminUser.updatedDate = adminUserEntity.updateddate;
    adminUser.lastLogin = adminUserEntity.last_login;
    adminUser.hashRefreshToken = adminUserEntity.hach_refresh_token;

    return adminUser;
  }

  private toUserEntity(adminUser: UserM): User {
    const adminUserEntity: User = new User();

    adminUserEntity.email = adminUser.email;
    adminUserEntity.password = adminUser.password;
    adminUserEntity.last_login = adminUser.lastLogin;

    return adminUserEntity;
  }
}
