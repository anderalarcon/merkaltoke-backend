import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Producto } from 'src/producto/entities/product.entity';

@Entity()
export class Empresa extends User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  ruc: string;
  @OneToMany(() => Producto, (product) => product.empresa)
  productos: Producto[];
}
