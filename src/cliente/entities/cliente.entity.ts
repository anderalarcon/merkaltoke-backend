import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Carrito } from 'src/carrito/entities/carrito.entity';

@Entity()
export class Cliente extends User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @OneToOne(() => Carrito, carrito => carrito.cliente)
  carrito: Carrito;
}
