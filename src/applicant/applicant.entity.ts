import { Application } from 'src/application/application.entity';
import { EssentialAnswer } from 'src/essential-answer/essential-answer.entity';
import { QuestionAnswer } from 'src/question-answer/question-answer.entity';
import {
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Applicant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Application, (application) => application.applicants)
  @JoinTable()
  application: Application;

  @OneToMany(
    () => EssentialAnswer,
    (essentialAnswer) => essentialAnswer.applicant,
  )
  essentialAnswers: EssentialAnswer[];

  @OneToMany(() => QuestionAnswer, (questionAnswer) => questionAnswer.applicant)
  questionAnswers: QuestionAnswer[];

  @CreateDateColumn()
  createdAt: Date;
}
