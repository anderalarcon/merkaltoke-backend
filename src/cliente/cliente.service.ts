import { Injectable } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDTO } from './dto/createClienteDTO';

@Injectable()
export class ClienteService {
  
  @InjectRepository(Cliente)
  private clienteRepository: Repository<Cliente>

  create(cliente: CreateClienteDTO) {
    return this.clienteRepository.save(cliente);
  }

  find(id: number) {
    return this.clienteRepository.findOne({ where: { id: id } });
  }
}
