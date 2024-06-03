import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Carrito } from 'src/carrito/entities/carrito.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  precio: number;

  @Column()
  imageurl: string;

  @ManyToOne(() => Empresa, empresa => empresa.productos)
  empresa: Empresa;

  @ManyToMany(() => Carrito, carrito => carrito.productos)
  carritos: Carrito[];
}
