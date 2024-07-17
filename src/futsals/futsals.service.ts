import { Injectable } from '@nestjs/common';
import { CreateFutsalDto } from './dto/create-futsal.dto';
import { UpdateFutsalDto } from './dto/update-futsal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FutsalsService {
  constructor(private prismaService: PrismaService) {}
  create(createFutsalDto: CreateFutsalDto, user: any) {
    return this.prismaService.futsal.create({
      data: {
        ...createFutsalDto,
        ownerId: user.userId,
      },
    });
  }

  findAll() {
    return this.prismaService.futsal.findMany({
      include: {
        owner: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.futsal.findFirst({ where: { id } });
  }

  update(id: number, updateFutsalDto: UpdateFutsalDto) {
    return this.prismaService.futsal.update({
      where: { id },
      data: updateFutsalDto,
    });
  }

  remove(id: number) {
    return this.prismaService.futsal.delete({ where: { id } });
  }
}
