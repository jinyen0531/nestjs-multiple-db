import { Controller, Get } from '@nestjs/common';
import { ChannelMasterService } from './channel-master.service';

@Controller('channel-master')
export class ChannelMasterController {
  constructor(private readonly channelMasterService: ChannelMasterService) {}

  @Get()
  async findAll() {
    return this.channelMasterService.findAll();
  }
}
