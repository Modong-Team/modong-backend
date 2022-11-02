import { ApiProperty } from '@nestjs/swagger';
import { Club } from 'src/club/club.entity';
import { Essential } from 'src/essential/essential.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
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

  @ManyToOne(() => Club, (club) => club.applications)
  @JoinTable()
  club: Club;

  @ManyToMany(() => Essential, (essential) => essential.applications)
  @JoinTable()
  essentials: Essential[];
}
