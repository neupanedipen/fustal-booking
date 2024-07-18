import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
// import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { Role } from '@prisma/client';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}
  create(createBookingDto: CreateBookingDto, userId: number) {
    return this.prisma.booking.create({
      data: { ...createBookingDto, userId },
    });
  }

  findAll(userId: number) {
    return this.prisma.booking.findMany({ where: { userId } });
  }

  findOne(id: number) {
    return this.prisma.booking.findFirst({ where: { id } });
  }

  // update(id: number, updateBookingDto: UpdateBookingDto) {
  //   return `This action updates a #${id} booking`;
  // }

  remove(id: number) {
    return this.prisma.booking.delete({ where: { id } });
  }
}
