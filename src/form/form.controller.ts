import { Body, Controller, Post } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  async createForm(@Body() createFormDto: CreateFormDto) {
    await this.formService.createForm(createFormDto);
  }
}
