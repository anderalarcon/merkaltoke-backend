import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

  create(createProductDto: CreateProductDto) {
    const newProduct = new Product();
    newProduct.nombre = createProductDto.nombre;
    newProduct.descripcion = createProductDto.descripcion;
    newProduct.precio = createProductDto.precio;
    newProduct.imageurl = createProductDto.imageurl;
    return this.productRepository.save(newProduct);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOne({where: {id}})
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findOne({where: {id}});
    this.productRepository.merge(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async remove(id: number) {
    await this.productRepository.delete(id);
    return true;
  }
}
