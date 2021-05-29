import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { PostController } from './controllers/post.controller';
import { Post } from './entity/post.entity';
import { PostService } from './services/post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    UserModule
  ],
  providers: [PostService],
  exports: [PostService],
  controllers: [PostController],
})
export class PostModule {}
