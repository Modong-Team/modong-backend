import { EssentialResponse } from 'src/essential-response/essential-response.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
    nullable: false,
  })
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(
    () => EssentialResponse,
    (essentialResponse) => essentialResponse.application,
    {
      cascade: true,
    },
  )
  @JoinColumn()
  essentialResponses: EssentialResponse[];
}
