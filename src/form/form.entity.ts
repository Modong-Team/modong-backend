import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: String,
  })
  type: string;

  @Column({
    type: String,
  })
  title: string;

  @Column({
    type: String,
  })
  response: string;
}
