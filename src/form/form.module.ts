import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './form.entity';
import { CheckboxQuestion } from 'src/question/checkbox-question.entity';
import { CheckboxOption } from 'src/checkbox-option/checkbox-option.entity';
import { RadioQuestion } from 'src/question/radio-question.entity';
import { RadioOption } from 'src/radio-option/radio-option.entity';
import { Application } from 'src/application/application.entity';
import { Question } from 'src/question/question.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Form,
      CheckboxQuestion,
      CheckboxOption,
      RadioQuestion,
      RadioOption,
      Application,
      Question,
    ]),
  ],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
