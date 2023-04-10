import { Category } from 'src/categories/entities/category.entity';
import { Item } from 'src/item/entities/item.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tb_products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  name: string;

  price: string;

  description: string;

  banner: string;

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

  @ManyToOne(() => Category, (categories) => categories.products)
  category_id: Category;

  @ManyToOne(() => Item, (items) => items.product_id)
  items_id: Array<Item>;
}
