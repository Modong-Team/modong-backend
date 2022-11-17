import { RadioQuestion } from 'src/question/radio-question.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class RadioOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
  })
  value: string;

  @ManyToOne(() => RadioQuestion, (radioQuestion) => radioQuestion.options)
  @JoinTable()
  question: RadioQuestion;
}
