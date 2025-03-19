import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpCode,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { query, Request } from 'express';
import { CarsDto } from './dto/cars.dto';
import { CarsService } from './cars.service';

@Controller('cars')
export class carsController {
  constructor(private carsService: CarsService) {}

  @Post('/add/cars')
  async create(@Body() carsDto: CarsDto, @Res() res: Response) {
    return res.ok;
  }

  @Get('/get/cars')
  getAll(@Query() query: CarsDto) {
    return `Best car type ${query.type}`;
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return `Car with id ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() carsDto: CarsDto) {
    return `Number of ${id} car updated!`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `number of ${id} is deleted !`;
  }
}
