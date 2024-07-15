import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FutsalsService } from './futsals.service';
import { CreateFutsalDto } from './dto/create-futsal.dto';
import { UpdateFutsalDto } from './dto/update-futsal.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('futsals')
@ApiTags('Futsals')
export class FutsalsController {
  constructor(private readonly futsalsService: FutsalsService) {}

  @Post()
  create(@Body() createFutsalDto: CreateFutsalDto) {
    return this.futsalsService.create(createFutsalDto);
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
