import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FutsalsService } from './futsals.service';
import { CreateFutsalDto } from './dto/create-futsal.dto';
import { UpdateFutsalDto } from './dto/update-futsal.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('futsals')
@ApiTags('Futsals')
@UseGuards(JwtGuard)
export class FutsalsController {
  constructor(private readonly futsalsService: FutsalsService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles(Role.OWNER)
  create(@Body() createFutsalDto: CreateFutsalDto, @GetUser() user: any) {
    return this.futsalsService.create(createFutsalDto, user);
  }

  @Get()
  findAll() {
    return this.futsalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.futsalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFutsalDto: UpdateFutsalDto) {
    return this.futsalsService.update(+id, updateFutsalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.futsalsService.remove(+id);
  }
}
