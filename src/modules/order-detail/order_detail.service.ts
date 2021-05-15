import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { OrderDetail } from "./order_detail.entity";

@Injectable()
export class OrderDetailService extends TypeOrmCrudService<OrderDetail> {
  constructor(@InjectRepository(OrderDetail) repo) {
    super(repo);
  }
}