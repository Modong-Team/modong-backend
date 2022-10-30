import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Essential } from './essential.entity';
import { EssentialController } from './essential.controller';
import { EssentialService } from './essential.service';

@Module({
  imports: [TypeOrmModule.forFeature([Essential])],
  controllers: [EssentialController],
  providers: [EssentialService],
})
export class EssentialModule {}
