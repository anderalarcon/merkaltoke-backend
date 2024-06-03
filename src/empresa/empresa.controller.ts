import {Controller, Get, Post, Body, Param,} from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDTO } from './dto/createEmpresaDTO';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post('create')
  async createEmpresa(@Body() empresa: CreateEmpresaDTO) {
    return this.empresaService.create(empresa);
  }

  @Get(':id')
  async findEmpresaById(@Param('id') id: number) {
    return this.empresaService.find(id);
  }
}
