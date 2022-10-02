import { Controller, Get, Post, Inject, Body } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  UseCaseProxy,
  UsecasesProxyModule,
  ApiResponseType,
} from '@auth/infrastructure';
import {
  InsertUserDetailUseCases,
  GetUserDetailUseCases,
} from '@auth/usecases';
import { UserAddPresenter } from './addUser.presenter';
import { AddUserDto } from './addUser.dto';

import { AppService } from './app.service';

@Controller()
@ApiTags()
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(UserAddPresenter)
export class AppController {
  constructor(
    @Inject(UsecasesProxyModule.INSERT_USER_DETAIL_USECASES_PROXY)
    private readonly addUserDetailUseCaseProxy: UseCaseProxy<InsertUserDetailUseCases>,
    private readonly appService: AppService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  @ApiResponseType(UserAddPresenter, true)
  async addUserDetail(@Body() addUserlDto: AddUserDto) {
    const userCreated = await this.addUserDetailUseCaseProxy
      .getInstance()
      .execute(addUserlDto);

    console.log('@@@111', userCreated);

    return new UserAddPresenter(userCreated);
  }
}
