import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class AddUserDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly fname: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly lname: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsBoolean()
  readonly isActive: boolean;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsString()
  readonly address1: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsString()
  readonly address2: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsString()
  readonly postalCode: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsString()
  readonly city: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsString()
  readonly country: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsString()
  readonly phone: string;
}
