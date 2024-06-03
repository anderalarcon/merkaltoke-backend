import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from './entities/carrito.entity';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { ClienteModule } from 'src/cliente/cliente.module';
import { ProductoModule } from 'src/producto/producto.module';


@Module({
  imports: [TypeOrmModule.forFeature([Carrito]), ClienteModule, ProductoModule],
  providers: [CarritoService],
  controllers: [CarritoController],
})
export class CarritoModule {}