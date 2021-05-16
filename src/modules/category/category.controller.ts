import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@ApiTags('Category')
@Crud({
  model: {
    type: Category
  }
})
@Controller('categories')
export class CategoryController implements CrudController<Category> {
  constructor(public service: CategoryService){}
}
