import { Controller, Post, Param, ParseIntPipe, Body } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { AgregarProductoDto } from './dto/agregarProductoDto';

@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Post('create/:clienteId')
  async crearCarrito(@Param('clienteId', ParseIntPipe) clienteId: number) {
    return this.carritoService.crearCarrito(clienteId);
  }

  @Post('addProduct/:carritoId')
  async agregarProducto(@Param('carritoId', ParseIntPipe) carritoId: number,@Body() agregarProductoDto: AgregarProductoDto,) {
    return this.carritoService.agregarProducto(carritoId, agregarProductoDto);
  }
}
