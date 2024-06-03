import { Controller, Post, Body, Param } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductDTO} from './dto/createProductoDTO';

@Controller('products')
export class ProductoController {
  constructor(private readonly productsService: ProductoService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDTO) {
    return this.productsService.create(createProductDto);
  }

  async findProductById(@Param('id') id: number) {
    return this.productsService.find(id);
  }
}