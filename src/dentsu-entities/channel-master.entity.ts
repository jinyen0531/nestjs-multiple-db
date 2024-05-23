import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ database: process.env.DB2_NAME, name: 'channel_master' })
export class ChannelMaster {
  @PrimaryColumn({ type: 'varchar' })
  channelCode: string;

  @Column({
    type: 'varchar',
    length: 40,
    nullable: true,
  })
  channelName: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  channelNameBrief: string;

  @Column({
    type: 'varchar',
    length: 1,
    nullable: true,
  })
  family: string;

  @Column({
    type: 'varchar',
    length: 1,
    nullable: true,
  })
  kind: string;

  @Column({
    type: 'varchar',
    length: 12,
    nullable: true,
  })
  category: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  channelTel: string;

  @Column({
    type: 'varchar',
    length: 80,
    nullable: true,
  })
  channelAdd: string;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  contactName: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  contactTel: string;

  @Column({
    type: 'varchar',
    length: 1,
    nullable: true,
  })
  status: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  createDate: Date;

  @Column({
    type: 'date',
    nullable: true,
  })
  modifyDate: Date;

  @Column({
    type: 'varchar',
    length: 8,
    nullable: true,
  })
  createUser: string;

  @Column({
    type: 'varchar',
    length: 8,
    nullable: true,
  })
  modifyUser: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  sortOrder: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  acnielsenNo: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  purchaseGroup: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  minCtl: number;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  account: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  xkmName: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  tvNo: number;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  mainTa: string;

  @Column({
    type: 'smallint',
    nullable: true,
    name: 'arianna_id',
  })
  ariannaId: number;
}
