import { Form } from 'src/form/form.entity';
import { QuestionAnswer } from 'src/question-answer/question-answer.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
  })
  content: string;

  @Column()
  type: string;

  @ManyToOne(() => Form, (form) => form.questions)
  @JoinTable()
  form: Form;

  @OneToMany(() => QuestionAnswer, (questionAnswer) => questionAnswer.question)
  questionAnswers: QuestionAnswer[];
}
