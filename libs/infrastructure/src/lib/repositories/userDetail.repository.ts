import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserDetail, UserDetailRepository } from '@auth/domain';
import { UserDetail as UserDetailEntity } from '../entities/userDetail.entity';
import { ExceptionsService } from '../exceptions';

@Injectable()
export class DatabaseUserDetailRepository implements UserDetailRepository {
  constructor(
    @InjectRepository(UserDetail)
    private readonly userDetailEntityRepository: Repository<UserDetail>,
    private readonly exceptionService: ExceptionsService
  ) {}

  async getUserByEmail(email: string): Promise<UserDetail | void> {
    const userDetailEntity = await this.userDetailEntityRepository.findOne({
      where: {
        email,
      },
    });

    if (!userDetailEntity) {
      return this.exceptionService.userNotFound({
        message: `user ${email} not found`,
      });
    } else {
      return this.toUser(userDetailEntity);
    }
  }

  async insertUser(user: UserDetail): Promise<UserDetail> {
    const userDetailEntity = this.toUserEntity(user);

    const result = await this.userDetailEntityRepository.insert(
      userDetailEntity
    );

    const resultUser = this.toUser(result.generatedMaps[0] as UserDetailEntity);
    console.log('@@@222', result);
    console.log('@@@333', resultUser);

    return resultUser;
  }

  //   getUsersByEmail(): Promise<UserDetail[]> {}
  //   getUserbyId(id: number): Promise<UserDetail> {}
  //   updateUser(user: UserDetail): Promise<void> {}
  //   deleteUser(email: string): Promise<void> {}

  private toUser(userDetailEntity: UserDetailEntity): UserDetail {
    const userDetail: UserDetail = new UserDetail();

    userDetail.id = userDetailEntity.id;
    userDetail.email = userDetailEntity.email;
    userDetail.fname = userDetailEntity.fname;
    userDetail.lname = userDetailEntity.lname;
    userDetail.address1 = userDetailEntity.address1;
    userDetail.address2 = userDetailEntity.address2;
    userDetail.postalCode = userDetailEntity.postalCode;
    userDetail.city = userDetailEntity.city;
    userDetail.isActive = userDetailEntity.isActive;
    userDetail.country = userDetailEntity.country;
    userDetail.phone = userDetailEntity.phone;

    return userDetail;
  }

  private toUserEntity(userDetail: UserDetail): UserDetailEntity {
    const userEntity: UserDetailEntity = new UserDetailEntity();

    userEntity.email = userDetail.email;
    userEntity.fname = userDetail.fname;
    userEntity.lname = userDetail.lname;
    userEntity.address1 = userDetail.address1;
    userEntity.address2 = userDetail.address2;
    userEntity.postalCode = userDetail.postalCode;
    userEntity.city = userDetail.city;
    userEntity.country = userDetail.country;
    userEntity.isActive = userDetail.isActive;
    userEntity.phone = userDetail.phone;

    return userEntity;
  }
}
