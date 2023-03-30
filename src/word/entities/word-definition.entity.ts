import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wordPhonetics')
export class WordPhonetics {
  @PrimaryGeneratedColumn('increment', { comment: 'user identifier' })
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  wordDefId: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  partOfSpeech: string;

  @Column({
    type: 'varchar',
    length: 3000,
  })
  sourceURL: string;

  @Column({
    type: 'varchar',
    length: 3000,
  })
  audio: string;
}
