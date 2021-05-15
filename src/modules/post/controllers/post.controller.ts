import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Post } from '../entity/post.entity';
import { PostService } from '../services/post.service';

@ApiTags('Post')
@Crud({
  model: {
    type: Post,
  },
  query: {
    join: {
      user: {
        eager: true
      }
    }
  }
})
@Controller('posts')
export class PostController implements CrudController<Post> {
  constructor(public service: PostService) {}
}
