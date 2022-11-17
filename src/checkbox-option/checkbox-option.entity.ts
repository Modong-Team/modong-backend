import { CheckboxQuestion } from 'src/question/checkbox-question.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CheckboxOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
  })
  value: string;

  @ManyToOne(
    () => CheckboxQuestion,
    (checkboxQuestion) => checkboxQuestion.options,
  )
  @JoinTable()
  question: CheckboxQuestion;
}
