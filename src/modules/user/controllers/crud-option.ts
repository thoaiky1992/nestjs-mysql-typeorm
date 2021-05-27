import { CrudOptions } from "@nestjsx/crud";
import { User } from "../entity/user.entity";

export const UserCrudOption = (): CrudOptions => (
  {
    model: {
      type: User,
    },
    query: {
      join: {
        posts: {
          eager: true
        }
      },
      exclude: ['password', 'role'],
    }
  }
)