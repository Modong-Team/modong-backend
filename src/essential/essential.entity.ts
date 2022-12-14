import { ApiProperty } from '@nestjs/swagger';
import { Application } from 'src/application/application.entity';
import { EssentialAnswer } from 'src/essential-answer/essential-answer.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Essential {
  @ApiProperty({
    example: 0,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: '이름이 무엇인가요?',
  })
  @Column({
    type: String,
    nullable: false,
  })
  content: string;

  @ApiProperty({
    example: 'true',
  })
  @Column({
    type: Boolean,
    nullable: false,
  })
  isFixed: boolean;

  @ManyToMany(() => Application, (application) => application.essentials)
  applications: Application[];

  @OneToMany(
    () => EssentialAnswer,
    (essnetialAnswer) => essnetialAnswer.essential,
  )
  essentialAnswers: EssentialAnswer[];
}
