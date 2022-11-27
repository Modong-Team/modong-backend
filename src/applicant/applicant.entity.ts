import { Application } from 'src/application/application.entity';
import { ApplicantStatus } from 'src/enum/applicant-status.enum';
import { EssentialAnswer } from 'src/essential-answer/essential-answer.entity';
import { QuestionAnswer } from 'src/question-answer/question-answer.entity';
import {
  Column,
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

  @Column({
    type: 'enum',
    enum: ApplicantStatus,
  })
  status: ApplicantStatus;

  @Column({
    type: 'float',
  })
  rate: number;

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
