import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../category/category.entity";

@Entity({name: 'products'})
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id 

  @Column()
  name: string

  @Column("simple-array")
  images: string[];

  @Column({type: 'int'})
  price: number;

  @Column({type: 'int'})
  stock: number;

  @ManyToOne(type => Category, category => category.products)
  @JoinColumn({name: 'category_id'})
  category: Category;

}