import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class MiddlewaresMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Example Middleware');
    console.log(req.headers);
    const header = req.headers;
    if (!header) {
      throw new HttpException('No Header', HttpStatus.FORBIDDEN);
    }
    next();
  }
}
