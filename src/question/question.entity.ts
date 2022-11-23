import { Form } from 'src/form/form.entity';
import { QuestionAnswer } from 'src/question-answer/question-answer.entity';
import { QuestionOption } from 'src/question-option/question-option.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { QuestionType } from 'src/enum/question-type.enum';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
  })
  content: string;

  @Column({
    type: 'enum',
    enum: QuestionType,
  })
  type: QuestionType;

  @ManyToOne(() => Form, (form) => form.questions)
  @JoinTable()
  form: Form;

  @OneToMany(() => QuestionAnswer, (questionAnswer) => questionAnswer.question)
  questionAnswers: QuestionAnswer[];

  @OneToMany(() => QuestionOption, (option) => option.question)
  questionOptions: QuestionOption[];
}
