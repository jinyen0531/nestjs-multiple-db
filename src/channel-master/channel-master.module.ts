import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelMaster } from 'src/dentsu-entities/channel-master.entity';
import { ChannelMasterController } from './channel-master.controller';
import { ChannelMasterService } from './channel-master.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChannelMaster], 'AZJAW1DPIADB01')],
  providers: [ChannelMasterService],
  controllers: [ChannelMasterController],
})
export class ChannelMasterModule {}
