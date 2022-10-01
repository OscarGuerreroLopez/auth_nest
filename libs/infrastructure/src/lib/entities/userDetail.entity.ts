import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class UserDetail {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index({ unique: true })
  @Column('varchar', { unique: true })
  email!: string;

  @Column('text')
  fname!: string;

  @Column('text')
  lname!: string;

  @Column({ nullable: true })
  address1?: string;

  @Column({ nullable: true })
  address2?: string;

  @Column({ nullable: true })
  postalCode?: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  phone?: string;
}
