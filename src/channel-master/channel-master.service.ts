import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelMaster } from 'src/dentsu-entities/channel-master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChannelMasterService {
  constructor(
    @InjectRepository(ChannelMaster, 'AZJAW1DPIADB01')
    private readonly repository: Repository<ChannelMaster>,
  ) {}

  async findAll(): Promise<ChannelMaster[]> {
    return this.repository.createQueryBuilder('c').getMany();
  }
}
