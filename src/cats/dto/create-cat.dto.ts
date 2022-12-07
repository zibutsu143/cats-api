import { IsString, IsNumber, Min, Max, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateCatDto {
  @ApiProperty()
  @IsString()
  breed: string;

  @ApiProperty()
  @IsString()
  breedGroup: string;

  @Transform(({ value }) => Number(value))
  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  lifeSpan: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  bredFor: string;
}
