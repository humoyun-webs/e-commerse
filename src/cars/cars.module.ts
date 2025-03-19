import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { carsController } from './cars.controller';
import { CarsService } from './cars.service';
import { TypeMiddlware } from 'src/middlewares/logger.middleware';

@Module({
  imports: [],
  controllers: [carsController],
  providers: [CarsService],
})
export class CarsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TypeMiddlware).forRoutes(carsController);
    // .forRoutes({path:'cars' , method:RequestMethod.GET})
  }
}
