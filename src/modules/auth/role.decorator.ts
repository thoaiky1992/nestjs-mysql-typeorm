import { SetMetadata } from '@nestjs/common';
import { RoleType } from '../user/entity/user.entity';

export const HasRoles = (roles: RoleType[]) => SetMetadata('roles', roles);