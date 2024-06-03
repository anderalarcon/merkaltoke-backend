import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/product.entity';
import { CreateProductDTO } from './dto/createProductoDTO';
import { EmpresaService } from 'src/empresa/empresa.service';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productRepository: Repository<Producto>,
    private readonly empresaService: EmpresaService,
  ) {}

  async create(createProductDto: CreateProductDTO) {
    const { nombre, descripcion, precio, imageurl, empresaId } = createProductDto;
  
    // Buscas la empresa por su ID
    const empresa = await this.empresaService.find(empresaId);
  
    if (!empresa) {
      throw new Error(`No se encontró ninguna empresa con el ID ${empresaId}`);
    }
  
    const product = new Producto();
    product.nombre = nombre;
    product.descripcion = descripcion;
    product.precio = precio;
    product.imageurl = imageurl;
    product.empresa = empresa; // Asignas la entidad empresa encontrada
  
    return this.productRepository.save(product);
  }

  async find(id: number) {
    return this.productRepository.findOne({ where: { id: id } });
  }
}