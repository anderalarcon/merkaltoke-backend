import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module';
import { dataSourceOptions } from '../db/data-source';
import { EmpresaModule } from './empresa/empresa.module';
import { ClienteModule } from './cliente/cliente.module';
import { CarritoModule } from './carrito/carrito.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ProductoModule,
    EmpresaModule,
    ClienteModule,
    CarritoModule,
  ],
})
export class AppModule { }
