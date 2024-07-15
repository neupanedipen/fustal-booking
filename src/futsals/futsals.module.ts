import { Module } from '@nestjs/common';
import { FutsalsService } from './futsals.service';
import { FutsalsController } from './futsals.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FutsalsController],
  providers: [FutsalsService],
})
export class FutsalsModule {}
