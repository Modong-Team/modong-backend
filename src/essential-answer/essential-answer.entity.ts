import { Applicant } from 'src/applicant/applicant.entity';
import { Essential } from 'src/essential/essential.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class EssentialAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
  })
  answer: string;

  @ManyToOne(() => Applicant, (applicant) => applicant.essentialAnswers)
  @JoinTable()
  applicant: Applicant;

  @ManyToOne(() => Essential, (essential) => essential.essentialAnswers)
  @JoinTable()
  essential: Essential;
}
