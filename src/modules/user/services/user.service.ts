import { ForbiddenException, Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AuthRole, User } from '../entity/user.entity';
import { Request } from 'express';
import { CrudRequest } from '@nestjsx/crud';
import { CreateUserDto } from '../dto/user.create.dto';

@Injectable({ scope: Scope.REQUEST })
export class UserService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User) repo,
    @Inject(REQUEST) private readonly request: Request
  ) {
    super(repo);
  }

  async createOne(crudRequest: CrudRequest, dto: CreateUserDto) {
    const user = await this.repo.findOne(this.request.user['id']);
    if(user.role !== AuthRole.ADMIN) {
      throw new ForbiddenException();
    }
    return super.createOne(crudRequest, dto);
  } 
}
