import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { OrderDetail } from "./order_detail.entity";
import { OrderDetailService } from "./order_detail.service";

@ApiTags('Order Detail')
@Crud({
  model: {
    type: OrderDetail
  }
})
@Controller('order_detail')
export class OrderDetailController implements CrudController<OrderDetail> {
  constructor(public service: OrderDetailService){}
}