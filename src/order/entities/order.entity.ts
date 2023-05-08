import { OrderEnumType } from 'src/enum/OrderEnum';
import { Item } from 'src/item/entities/item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tb_order')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  table: number;

  @Column({ type: 'enum', enum: OrderEnumType, default: OrderEnumType.PENDING })
  status: number;

  @Column({ default: true })
  draft: boolean;

  @Column({ nullable: true })
  name?: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  @ManyToMany(() => Item, (items) => items.order)
  items: Array<Item>;
}
