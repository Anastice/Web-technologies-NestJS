import { Test, TestingModule } from '@nestjs/testing';
import { SoundtracksController } from './soundtracks.controller';

describe('SoundtracksController', () => {
  let controller: SoundtracksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoundtracksController],
    }).compile();

    controller = module.get<SoundtracksController>(SoundtracksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
