import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/modules/auth/jwt.guard';
import { HasRoles } from 'src/modules/auth/role.decorator';
import { RolesGuard } from 'src/modules/auth/role.guard';
import { User } from '../entity/user.entity';
import { UserService } from '../services/user.service';

@HasRoles('ADMIN', 'CLIENT')
@UseGuards(JwtAuthGuard, RolesGuard)
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
  constructor(
    public service: UserService,
  ) {}
}
