import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TypeMiddlware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { type, color, year } = req.body;
    if (!type || !color || !year) return res.send('something is wrong');

    next();
  }
}
