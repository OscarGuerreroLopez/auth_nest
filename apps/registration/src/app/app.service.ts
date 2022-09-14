import { Injectable } from '@nestjs/common';
import { Dummy } from '@auth/utils';

@Injectable()
export class AppService {
  getData(): Dummy {
    return { message: 'Welcome to registration!' };
  }
}
