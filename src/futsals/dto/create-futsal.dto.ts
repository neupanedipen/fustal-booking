import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateFutsalDto {
  @IsString()
  @MinLength(3)
  @ApiProperty()
  name: string;
  @IsString()
  @MinLength(3)
  @MaxLength(1000)
  @ApiProperty()
  @IsOptional()
  description: string;
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @ApiProperty()
  address: string;
  @IsNumber()
  pricePerHour: number;
}
