import { Controller, Post, Body, Get, Param} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDTO } from './dto/createClienteDTO';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('create')
  async createCliente(@Body() cliente: CreateClienteDTO) {
    return this.clienteService.create(cliente);
  }

  @Get(':id')
  async findClienteById(@Param('id') id: number) {
    return this.clienteService.find(id);
  }
}
