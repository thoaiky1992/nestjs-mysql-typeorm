import { CrudController } from '@nestjsx/crud';
import { CrudDecoratorController } from 'src/libraries/crud/crud-controller.decorator';
import { AuthRole } from 'src/modules/user/entity/user.entity';
import { Post } from '../entity/post.entity';
import { PostService } from '../services/post.service';

@CrudDecoratorController('posts', Post)
export class PostController implements CrudController<Post> {
  constructor(public service: PostService) {}
}
