import { RadioOption } from 'src/radio-option/radio-option.entity';
import { ChildEntity, OneToMany } from 'typeorm';
import { Question } from './question.entity';

@ChildEntity()
export class RadioQuestion extends Question {
  @OneToMany(() => RadioOption, (radioOption) => radioOption.question)
  options: RadioOption[];
}
