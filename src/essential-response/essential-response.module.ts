import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EssentialResponse } from './essential-response.entity';
import { EssentialResponseController } from './essential-response.controller';
import { EssentialResponseService } from './essential-response.service';
import { EssentialResponseRepository } from './essential-response.repository';
import { Application } from 'src/application/application.entity';
import { Essential } from 'src/essential/essential.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EssentialResponse, Application, Essential]),
  ],
  controllers: [EssentialResponseController],
  providers: [EssentialResponseService, EssentialResponseRepository],
})
export class EssentialResponseModule {}
