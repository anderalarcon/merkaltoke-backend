import { Injectable } from '@nestjs/common';
import { Empresa } from './entities/empresa.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpresaDTO } from './dto/createEmpresaDTO';

@Injectable()
export class EmpresaService {
  @InjectRepository(Empresa)
  private empresaRepository: Repository<Empresa>;

  async create(empresa: CreateEmpresaDTO) {
    return this.empresaRepository.save(empresa);
  }

  async find(id: number) {
    return this.empresaRepository.findOne({ where: { id: id } });
  }
}
