import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CheckboxQuestion } from './checkbox-question.entity';
import { Question } from './question.entity';
import { RadioQuestion } from './radio-question.entity';

@Controller('question')
export class QuestionController {
  constructor(
    @InjectRepository(CheckboxQuestion)
    private checkboxQuestionRepository: Repository<CheckboxQuestion>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(RadioQuestion)
    private radioQuestionRepository: Repository<RadioQuestion>,
  ) {}
}
