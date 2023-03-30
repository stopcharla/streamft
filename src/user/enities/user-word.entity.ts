import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Users } from './user.entity';

@Entity('userSearch')
export class UserSearch extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { comment: 'user identifier' })
  id: number;

  @ManyToOne(() => Users)
  @JoinColumn()
  user: Users;

  @Column({
    type: 'varchar',
    length: 255,
  })
  word: string;

  @Column({
    type: 'bool',
  })
  isSuccessful: boolean;

  @Column({
    type: 'varchar',
    length: 255,
  })
  pos: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  returnType: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
