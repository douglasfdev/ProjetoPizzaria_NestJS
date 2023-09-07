import { UserRole } from 'src/enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  role: UserRole;
}
