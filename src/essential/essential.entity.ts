import { EssentialResponse } from 'src/essential-response/essential-response.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Essential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
    nullable: false,
  })
  content: string;

  @OneToOne(
    () => EssentialResponse,
    (essentialResponse) => essentialResponse.essential,
  )
  @JoinColumn()
  essentialResponse: EssentialResponse;
}
