import { Injectable } from '@nestjs/common';

@Injectable()
export class MarketsService {
  getHello(): string {
    return 'Hello World!';
  }
}
