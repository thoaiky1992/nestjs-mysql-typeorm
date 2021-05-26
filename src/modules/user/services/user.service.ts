import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from '../entity/user.entity';
import { Request } from 'express';
import { CrudRequest } from '@nestjsx/crud';

@Injectable({ scope: Scope.REQUEST })
export class UserService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User) repo,
    @Inject(REQUEST) private request: Request
  ) {
    super(repo);
  }
}
