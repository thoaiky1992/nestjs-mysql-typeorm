import { Post } from 'src/modules/post/entity/post.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity({ name: 'users'})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(type => Post, post => post.user)
  posts: Array<Post>
}
