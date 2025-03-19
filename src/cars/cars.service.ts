import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private readonly cars: Car[] = [];

  create(car:Car){
    this.cars.push(car)
  }

  getAll(): Car[] {
    return this.cars;
  }
}
