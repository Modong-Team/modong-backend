import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Essential } from './essential.entity';

@Injectable()
export class EssentialService {
  constructor(
    @InjectRepository(Essential)
    private readonly essentialRepository: Repository<Essential>,
  ) {}

  async getAllEssentials() {
    return await this.essentialRepository.find();
  }
}
