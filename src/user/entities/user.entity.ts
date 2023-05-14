import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;
}
