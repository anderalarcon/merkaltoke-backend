import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { dataSourceOptions } from '../db/data-source';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ProductsModule,
    UserModule,
  ],
})
export class AppModule { }
