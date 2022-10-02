import { ApiProperty } from '@nestjs/swagger';
import { UserDetail } from '@auth/domain';

export class UserAddPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  email!: string;
  @ApiProperty()
  fname: string;
  @ApiProperty()
  lname: string;
  @ApiProperty()
  isActive?: boolean;
  @ApiProperty()
  address1?: string;
  @ApiProperty()
  address2?: string;
  @ApiProperty()
  postalCode?: string;
  @ApiProperty()
  city?: string;
  @ApiProperty()
  country?: string;
  @ApiProperty()
  phone?: string;

  constructor(userDetail: UserDetail) {
    this.id = userDetail.id;
    this.email = userDetail.email;
    this.fname = userDetail.fname;
    this.lname = userDetail.lname;
    this.isActive = userDetail.isActive;
    this.address1 = userDetail.address1;
    this.address2 = userDetail.address2;
    this.postalCode = userDetail.postalCode;
    this.city = userDetail.city;
    this.country = userDetail.country;
    this.phone = userDetail.phone;
  }
}
