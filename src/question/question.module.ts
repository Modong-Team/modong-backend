import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckboxQuestion } from './checkbox-question.entity';
import { QuestionController } from './question.controller';
import { Question } from './question.entity';
import { QuestionService } from './question.service';
import { RadioQuestion } from './radio-question.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Question, RadioQuestion, CheckboxQuestion]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
