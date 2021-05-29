import { Controller, UseGuards } from "@nestjs/common"
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger"
import { Crud, CrudRequestOptions } from "@nestjsx/crud"
import { JwtAuthGuard } from "src/modules/auth/jwt.guard"
import { HasRoles } from "src/modules/auth/role.decorator"
import { RolesGuard } from "src/modules/auth/role.guard"
import { RoleType } from "src/modules/user/entity/user.entity"

export function CrudDecoratorController(
  table_name: string, 
  entity: Function, 
  hasRole: RoleType[] = null, 
  crudRequestOption?: CrudRequestOptions
): ClassDecorator {
  return function(target) {
    HasRoles(hasRole)(target)
    UseGuards(JwtAuthGuard, RolesGuard)(target)
    ApiBearerAuth()(target)
    ApiTags(table_name)(target)
    Crud({
      model: {
        type: entity
      },
      ...crudRequestOption
    })(target)
    Controller(table_name)(target)
  }
}