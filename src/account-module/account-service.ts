import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { EntityManager } from 'typeorm';

@Injectable()
export class AccountService {
    // constructor(@InjectEntityManager() private em: EntityManager){
        
    // }
     getUser(): string {
        return 'user';
      }
}
