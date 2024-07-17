import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '@prisma/client';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @MinLength(8)
  @IsOptional()
  password: string;

  @IsEnum(Role, { message: 'Invalid role property' })
  @IsOptional()
  role: Role;
}
