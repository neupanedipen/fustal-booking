import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateFutsalDto {
  @IsString()
  @MinLength(3)
  @ApiProperty()
  name: string;
  @IsString()
  @MinLength(3)
  @MaxLength(1000)
  @ApiProperty()
  about: string;
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @ApiProperty()
  location: string;
}
