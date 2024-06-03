import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Producto } from '../../producto/entities/product.entity';

@Entity()
export class Carrito {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Cliente, cliente => cliente.carrito)
  @JoinColumn()
  cliente: Cliente;

  @ManyToMany(() => Producto, producto => producto.carritos)
  @JoinTable()
  productos: Producto[];
}