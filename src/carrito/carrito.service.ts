import { Injectable, NotFoundException } from '@nestjs/common';
import { Carrito } from './entities/carrito.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteService } from 'src/cliente/cliente.service';
import { ProductoService } from 'src/producto/producto.service';

import { AgregarProductoDto } from './dto/agregarProductoDto';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private carritoRepository: Repository<Carrito>,
    private readonly clienteRepository: ClienteService,
    private readonly productoRepository: ProductoService,
  ) {}
  async crearCarrito(clienteId: number){
    const cliente = await this.clienteRepository.find(clienteId);
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${clienteId} no encontrado`);
    }

    const carrito = new Carrito();
    carrito.cliente = cliente;

    return this.carritoRepository.save(carrito);
  }

  async agregarProducto(
    carritoId: number,
    agregarProductoDto: AgregarProductoDto,
  ) {
    const { productoId } = agregarProductoDto;

    // Buscar el carrito por su ID
    const carrito = await this.carritoRepository.findOne({
      where: { id: carritoId },
      relations: ['productos'],
    });

    if (!carrito) {
      throw new Error(`No se encontró ningún carrito con el ID ${carritoId}`);
    }

    // Buscar el producto por su ID
    const producto = await this.productoRepository.find(productoId);

    if (!producto) {
      throw new Error(`No se encontró ningún producto con el ID ${productoId}`);
    }

    // Agregar el producto al carrito
    carrito.productos.push(producto);

    // Guardar el carrito actualizado en la base de datos
    return this.carritoRepository.save(carrito);
  }
}
