import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: '1',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Question',
  })
  @Column({
    type: String,
  })
  title: string;

  @ApiProperty({
    type: () => Application,
  })
  @ManyToOne(() => Application, (application) => application.forms)
  @JoinTable()
  application: Application;

  @ApiProperty({
    type: () => [Question],
  })
  @OneToMany(() => Question, (question) => question.form)
  questions: Question[];
}
