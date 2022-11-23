import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './form.entity';
import { Application } from 'src/application/application.entity';
import { Question } from 'src/question/question.entity';
import { QuestionOption } from 'src/question-option/question-option.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Form, Application, Question, QuestionOption]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
