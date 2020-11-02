import { Controller, Get } from '@nestjs/common';
import { AccountService } from '../account-service';
@Controller('account-controller')
export class AccountControllerController {
  constructor(private readonly __service: AccountService) {}
  @Get()
  getUser(): string {
   return this.__service.getUser();
  }
}
