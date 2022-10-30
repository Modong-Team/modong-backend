import { EssentialResponse } from 'src/essential-response/essential-response.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
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

  @OneToMany(
    () => EssentialResponse,
    (essentialResponse) => essentialResponse.essential,
  )
  @JoinColumn()
  essentialResponses: EssentialResponse[];
}
