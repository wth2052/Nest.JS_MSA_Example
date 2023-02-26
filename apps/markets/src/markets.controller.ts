import { Controller, Get } from '@nestjs/common';
import { MarketsService } from './markets.service';

@Controller()
export class MarketsController {
  constructor(private readonly marketsService: MarketsService) {}

  @Get()
  getHello(): string {
    return this.marketsService.getHello();
  }
}
