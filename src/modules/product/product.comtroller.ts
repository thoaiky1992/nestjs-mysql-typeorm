import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";

@ApiTags('Product')
@Crud({
  model: {
    type: Product
  },
  query: {
    join: {
      category: {
        eager: true
      }
    }
  }
})
@Controller('products')
export class ProductController implements CrudController<Product> {
  constructor(public service: ProductService){}
}