import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './application.entity';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { Club } from 'src/club/club.entity';
import { Essential } from 'src/essential/essential.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Application, Club, Essential])],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
