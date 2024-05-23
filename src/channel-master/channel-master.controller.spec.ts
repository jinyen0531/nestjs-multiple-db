import { Test, TestingModule } from '@nestjs/testing';
import { ChannelMasterController } from './channel-master.controller';

describe('ChannelMasterController', () => {
  let controller: ChannelMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChannelMasterController],
    }).compile();

    controller = module.get<ChannelMasterController>(ChannelMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
