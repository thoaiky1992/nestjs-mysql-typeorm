import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RoleArray, RoleType, User } from '../user/entity/user.entity';
import { UserService } from '../user/services/user.service';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private refector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.refector.get<RoleType[]>('roles', context.getClass());
    if(!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user: User = await this.userService.findOne(request.user.id);
    const hasRole = () => roles.includes(user.role);
    let hasPermission: boolean = false;
    if(hasRole()) {
      hasPermission = true;
    }
    return user && hasPermission;

  }
}