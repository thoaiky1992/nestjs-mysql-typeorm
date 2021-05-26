import { Post } from 'src/modules/post/entity/post.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

export type RoleType = 'ADMIN' | 'CLIENT'
export const RoleArray: RoleType[] = ['ADMIN', 'CLIENT']

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

  @Column("nvarchar", { default: 'CLIENT' })
  role: RoleType;

  @OneToMany(type => Post, post => post.user)
  posts: Array<Post>
}
