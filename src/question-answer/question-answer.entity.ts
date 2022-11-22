import { Applicant } from 'src/applicant/applicant.entity';
import { Question } from 'src/question/question.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class QuestionAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
  })
  answer: string;

  @ManyToOne(() => Applicant, (applicant) => applicant.questionAnswers)
  @JoinTable()
  applicant: Applicant;

  @ManyToOne(() => Question, (question) => question.questionAnswers)
  @JoinTable()
  question: Question;
}
