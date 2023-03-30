import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('licenses')
export class Licenses {
  @PrimaryGeneratedColumn('increment', { comment: 'user identifier' })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 3000,
  })
  url: string;
}