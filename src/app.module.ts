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
      // name: 'piano',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        // name: 'piano',
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        schema: configService.get('DB_SCHEMA'),
        autoLoadEntities: true,
        logging: true,
        // synchronize: true,
        entities: [__dirname + '/**/entities/*.entity.ts'],
      }),
    }),
    TypeOrmModule.forRootAsync({
      name: process.env.DENTSU_DB_NAME,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DENTSU_DB_HOST'),
        // port: configService.get('DENTSU_DB_PORT'),
        username: configService.get('DENTSU_DB_USERNAME'),
        password: configService.get('DENTSU_DB_PASSWORD'),
        database: configService.get('DENTSU_DB_NAME'),
        schema: configService.get('DENTSU_DB_SCHEMA'),
        logging: true,
        autoLoadEntities: true,
        namingStrategy: new SnakeNamingStrategy(),
        // synchronize: true,
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
