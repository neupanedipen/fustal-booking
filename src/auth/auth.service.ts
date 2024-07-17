import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dtos/login-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
    console.log(loginUserDto);

    const user = await this.prisma.user.findFirst({
      where: { email: loginUserDto.email },
    });
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    const verified = await bcrypt.compare(loginUserDto.password, user.password);
    if (!verified) {
      throw new BadRequestException('Invalid credentials');
    }
    const payload = {
      userId: user.id,
      role: user.role,
    };
    const token = await this.jwtService.signAsync(payload);
    return token;
  }
}
