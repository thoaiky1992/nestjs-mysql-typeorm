import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'banners'})
export class Banner extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  image: string

}