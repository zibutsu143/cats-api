import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Cats } from '@prisma/client';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCatDto): Promise<Cats> {
    return this.prisma.cats.create({ data });
  }

  findAll() {
    return `This action returns all cats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
