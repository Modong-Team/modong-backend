import { Question } from 'src/question/question.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class QuestionOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
  })
  value: string;

  @ManyToOne(() => Question, (question) => question.questionOptions)
  @JoinTable()
  question: Question;
}
