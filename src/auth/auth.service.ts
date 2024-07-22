import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dtos/login-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(loginUserDto: LoginUserDto) {
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

  async signup(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.prisma.user.create({
      data: { ...createUserDto, password: hashedPassword },
    });
  }
}
