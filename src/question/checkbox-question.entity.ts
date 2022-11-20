import { CheckboxOption } from 'src/checkbox-option/checkbox-option.entity';
import { ChildEntity, Column, OneToMany } from 'typeorm';
import { Question } from './question.entity';

@ChildEntity()
export class CheckboxQuestion extends Question {
  @OneToMany(() => CheckboxOption, (checkboxOption) => checkboxOption.question)
  options: CheckboxOption[];
}
