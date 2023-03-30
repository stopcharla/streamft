import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { comment: 'user identifier' })
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
    length: 255,
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;
}