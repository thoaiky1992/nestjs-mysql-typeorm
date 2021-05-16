import { User } from 'src/modules/user/entity/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';

@Entity({name: 'posts'})
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column({name: 'user_id'})
  userId: number
  @ManyToOne(type => User, user => user.posts)
  @JoinColumn({name: 'user_id'})
  user: User
}
