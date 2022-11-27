import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from 'src/application/application.entity';
import { EssentialAnswer } from 'src/essential-answer/essential-answer.entity';
import { Essential } from 'src/essential/essential.entity';
import { QuestionAnswer } from 'src/question-answer/question-answer.entity';
import { Question } from 'src/question/question.entity';
import { ApplicantController } from './applicant.controller';
import { Applicant } from './applicant.entity';
import { ApplicantService } from './applicant.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Applicant,
      Application,
      Essential,
      Question,
      EssentialAnswer,
      QuestionAnswer,
    ]),
  ],
  controllers: [ApplicantController],
  providers: [ApplicantService],
})
export class ApplicantModule {}
