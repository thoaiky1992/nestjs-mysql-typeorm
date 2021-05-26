import { Get, SetMetadata, UseInterceptors } from '@nestjs/common';
import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController, CrudRequest, CrudRequestInterceptor, ParsedRequest } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { HasRoles } from 'src/modules/auth/role.decorator';
import { RolesGuard } from 'src/modules/auth/role.guard';
import { User } from '../entity/user.entity';
import { UserService } from '../services/user.service';


@UseGuards(JwtAuthGuard, RolesGuard)
@HasRoles('ADMIN', 'CLIENT')
@ApiBearerAuth()
@ApiTags('User')
@Crud({
  model: {
    type: User,
  },
  query: {
    join: {
      posts: {
        eager: true
      }
    },
    exclude: ['password', 'role']
  }
})
@Controller('users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
