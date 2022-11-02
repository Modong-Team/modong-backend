import { Application } from 'src/application/application.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Application, (application) => application.club)
  applications: Application[];
}
