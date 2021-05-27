import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/services/user.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ){}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({where: { username }});
    if (user && user.password === password) {
      const { password, role,  ...result } = user;
      return result;
    }
    return null;
  }

  async login(payload: any) {
    const user = await this.validateUser(payload.username, payload.password);
    if(!user){
      throw new UnauthorizedException();
    }
    return {
      access_token: this.jwtService.sign(user),
    };
  }

}