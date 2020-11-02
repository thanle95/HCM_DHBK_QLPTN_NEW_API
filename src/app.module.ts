import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModuleModule } from './account-module/account-module.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';


@Module({
  imports: [AccountModuleModule,
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: 'ditagis.com',
    //   port: 1433,
    //   username: 'hcmdhbk',
    //   password: 'qlptn@123',
    //   database: 'HCM_DHBK_QLPTN',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
