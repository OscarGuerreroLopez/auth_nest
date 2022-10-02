import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { UserDetail } from './userDetail.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Index({ unique: true })
  @Column('varchar', { unique: true })
  email!: string;

  @Column('text')
  password!: string;

  @CreateDateColumn({ name: 'createdate' })
  createdate!: Date;

  @UpdateDateColumn({ name: 'updateddate' })
  updateddate!: Date;

  @Column({ nullable: true })
  last_login!: Date;

  @Column('varchar', { nullable: true })
  hach_refresh_token!: string;

  @OneToOne(() => UserDetail)
  @JoinColumn()
  userDetail!: UserDetail;
}
