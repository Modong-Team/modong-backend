import { Form } from 'src/form/form.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
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
}
