import { CrudOptions, CrudRequestOptions } from "@nestjsx/crud";

export const UserCrudRequestOption = (): CrudRequestOptions => (
  {
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