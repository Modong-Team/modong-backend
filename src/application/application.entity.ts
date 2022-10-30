import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: '모동 2021 지원서',
  })
  @Column({
    type: String,
    nullable: false,
  })
  title: string;

  @ApiProperty({
    example: '2022-10-30 21:20:31.577967',
  })
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
