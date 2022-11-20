import { Application } from 'src/application/application.entity';
import { Question } from 'src/question/question.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
  })
  title: string;

  @ManyToOne(() => Application, (application) => application.forms)
  @JoinTable()
  application: Application;

  @OneToMany(() => Question, (question) => question.form)
  questions: Question[];
}
