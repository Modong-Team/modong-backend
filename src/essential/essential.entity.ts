import { ApiProperty } from '@nestjs/swagger';
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

  @OneToMany(
    () => EssentialResponse,
    (essentialResponse) => essentialResponse.essential,
  )
  @JoinColumn()
  essentialResponses: EssentialResponse[];
}
