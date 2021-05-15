import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { Order } from "./order.entity";
import { OrderService } from "./order.service";

@Crud({
  model: {
    type: Order
  },
  query: {
    join: {
      orderDetails: {
        eager: true
      }
    }
  }
})
@Controller('order')
export class OrderController implements CrudController<Order> {
  constructor(public service: OrderService) {}
}