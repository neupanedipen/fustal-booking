import { ApiProperty } from '@nestjs/swagger';
import { BookingStatus } from '@prisma/client';
import { IsDate } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({ type: Date })
  @IsDate()
  startTime: string;
  @ApiProperty({ type: Date })
  @IsDate()
  endTime: string;
  @ApiProperty()
  totalPrice: number;
  @ApiProperty()
  status: BookingStatus;
  @ApiProperty()
  futsalId: number;
}
