import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "../order/order.entity";

@Entity({name: 'order_detail'})
export class OrderDetail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: string

  @Column()
  name: string

  @Column('simple-array')
  images: string

  @Column()
  price: number

  @Column()
  quantity: number

  @Column('bigint')
  total: number

  @ManyToOne(type => Order, order => order.orderDetails)
  @JoinColumn({name: 'order_id'})
  order: Order
}