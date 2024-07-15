import { Injectable } from '@nestjs/common';
import { CreateFutsalDto } from './dto/create-futsal.dto';
import { UpdateFutsalDto } from './dto/update-futsal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FutsalsService {
  constructor(private prismaService: PrismaService) {}
  create(createFutsalDto: CreateFutsalDto) {
    return this.prismaService.futsal.create({ data: createFutsalDto });
  }

  findAll() {
    return this.prismaService.futsal.findMany();
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
