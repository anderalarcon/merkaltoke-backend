import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/product.entity';
import { EmpresaModule } from 'src/empresa/empresa.module';

@Module({
  imports: [TypeOrmModule.forFeature([Producto]), EmpresaModule],
  controllers: [ProductoController],
  providers: [ProductoService],
  exports: [ProductoService],
})
export class ProductoModule {}
