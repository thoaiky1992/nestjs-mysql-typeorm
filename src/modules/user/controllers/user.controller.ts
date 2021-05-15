import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from '../entity/user.entity';
import { UserService } from '../services/user.service';

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
    }
  }
})
@Controller('users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
  
}
