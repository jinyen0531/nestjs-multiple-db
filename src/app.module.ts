import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChannelMasterModule } from './channel-master/channel-master.module';
import { SnakeNamingStrategy } from './snake-naming.strategy';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB1_HOST'),
        port: +configService.get('DB1_PORT'),
        username: configService.get('DB1_USERNAME'),
        password: configService.get('DB1_PASSWORD'),
        database: configService.get('DB1_NAME'),
        schema: configService.get('DB1_SCHEMA'),
        autoLoadEntities: true,
        logging: true,
        entities: [__dirname + '/**/entities/*.entity.ts'],
      }),
    }),
    TypeOrmModule.forRootAsync({
      name: process.env.DB2_NAME,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DB2_HOST'),
        username: configService.get('DB2_USERNAME'),
        password: configService.get('DB2_PASSWORD'),
        database: configService.get('DB2_NAME'),
        schema: configService.get('DB2_SCHEMA'),
        logging: true,
        autoLoadEntities: true,
        namingStrategy: new SnakeNamingStrategy(),
        entities: [__dirname + '/**/dentsu-entities/*.entity.ts'],
      }),
    }),
    ChannelMasterModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
