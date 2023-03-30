import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('words')
export class Words {
  @PrimaryGeneratedColumn('increment', { comment: 'user identifier' })
  id: number;
}