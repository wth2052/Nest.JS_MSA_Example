import { Test, TestingModule } from '@nestjs/testing';
import { MarketsController } from './markets.controller';
import { MarketsService } from './markets.service';

describe('MarketsController', () => {
  let marketsController: MarketsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MarketsController],
      providers: [MarketsService],
    }).compile();

    marketsController = app.get<MarketsController>(MarketsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(marketsController.getHello()).toBe('Hello World!');
    });
  });
});
