import { CrudController } from '@nestjsx/crud';
import { CrudDecoratorController } from 'src/libraries/crud/crud-controller.decorator';
import { User } from '../entity/user.entity';
import { UserService } from '../services/user.service';
import { UserCrudRequestOption } from './crud-option';


@CrudDecoratorController('users', User, null, UserCrudRequestOption())
export class UserController implements CrudController<User> {
  constructor(
    public service: UserService,
  ) {}
}
