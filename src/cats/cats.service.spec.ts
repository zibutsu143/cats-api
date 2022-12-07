import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { CatsService } from './cats.service';
import { Cats, Prisma } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';

// TODO : Decouple Prisma Service to create a fake service for testing
describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService, PrismaService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw not found error when updated with an invalid cat id ', async () => {
    await expect(service.update(1000000, {})).rejects.toThrow(
      NotFoundException,
    );
  });
});
