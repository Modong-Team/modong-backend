import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFormDto } from './dto/create-form.dto';
import { Form } from './form.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private readonly formRepository: Repository<Form>,
  ) {}

  async createForm(createFormDto: CreateFormDto) {
    const { type, title, response } = createFormDto;
    const form = this.formRepository.create({
      type,
      title,
      response,
    });

    await this.formRepository.save(form);
  }
}
