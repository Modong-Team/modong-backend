import { Application } from 'src/application/application.entity';
import { Essential } from 'src/essential/essential.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class EssentialResponse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
    nullable: false,
  })
  value: string;

  @ManyToOne(() => Application, (application) => application.essentialResponses)
  @JoinColumn()
  application: Application;

  @OneToOne(() => Essential, (essential) => essential.essentialResponse)
  @JoinColumn()
  essential: Essential;
}
