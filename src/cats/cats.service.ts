import { Injectable, NotFoundException } from '@nestjs/common';
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

  // TODO: Pagination
  async findAll(): Promise<Cats[]> {
    return this.prisma.cats.findMany();
  }

  async findOne(id: number): Promise<Cats> {
    const cat = await this.prisma.cats.findUnique({ where: { id } });
    if (!cat) {
      throw new NotFoundException('Cat not found');
    }
    return cat;
  }

  async update(id: number, data: UpdateCatDto): Promise<Cats> {
    try {
      const cat = await this.prisma.cats.update({ where: { id }, data });
      return cat;
    } catch (err) {
      throw new NotFoundException('Cat not found');
    }
  }

  async remove(id: number): Promise<Cats> {
    try {
      const cat = await this.prisma.cats.delete({ where: { id } });
      return cat;
    } catch (err) {
      throw new NotFoundException('Cat not found');
    }
  }
}
