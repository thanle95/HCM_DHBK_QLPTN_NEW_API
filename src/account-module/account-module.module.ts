import { Module } from '@nestjs/common';
import { AccountService } from './account-service';
import { AccountControllerController } from './account-controller/account-controller.controller';

@Module({
  providers: [AccountService],
  controllers: [AccountControllerController]
})
export class AccountModuleModule {}
