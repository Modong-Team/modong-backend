import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Essential } from './essential.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Essential])],
})
export class EssentialModule {}
