import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EssentialResponse } from './essential-response.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EssentialResponse])],
})
export class EssentialResponseModule {}
