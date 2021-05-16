import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { Banner } from "./banner.entity";
import { BannerService } from "./banner.service";

@ApiTags('Banner')
@Crud({
  model: {
    type: Banner
  }
})
@Controller('banners')
export class BannerController implements CrudController<Banner> {
  constructor(public service: BannerService) {}
}