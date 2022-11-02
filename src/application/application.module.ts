import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from './application.entity';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { Club } from 'src/club/club.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Application, Club])],
  controllers: [ApplicationController],
  providers: [ApplicationService],
})
export class ApplicationModule {}
