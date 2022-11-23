import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { RequestCreateFormDTO } from './dto/request.create-form.dto';
import { RequestUpdateFormByIdDTO } from './dto/request.update-form-by-id.dto';
import { ResponseCreateFormDTO } from './dto/response.create-form.dto';
import { ResponseUpdateFormDTO } from './dto/response.update-form-by-id.dto';
import { Form } from './form.entity';
import { FormService } from './form.service';

@ApiTags('form')
@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @ApiOperation({
    summary: '질문 페이지 생성',
  })
  @ApiCreatedResponse({
    description: 'ResponseCreateFormDTO',
    type: ResponseCreateFormDTO,
  })
  @Post()
  async createForm(
    @Body() requestCreateFormDTO: RequestCreateFormDTO,
  ): Promise<ResponseCreateFormDTO> {
    return await this.formService.createForm(requestCreateFormDTO);
  }

  @ApiOperation({
    summary: '질문 페이지 수정',
  })
  @ApiOkResponse({
    description: 'ResponseUpdateFormDTO',
    type: ResponseUpdateFormDTO,
  })
  @Put(':id')
  async updateFormById(
    @Body() requestUpdateFormByIdDTO: RequestUpdateFormByIdDTO,
    @Param('id') formId: number,
  ): Promise<ResponseUpdateFormDTO> {
    return await this.formService.updateFormById(
      formId,
      requestUpdateFormByIdDTO,
    );
  }

  @ApiOperation({
    summary: '지원서 id로 질문페이지 조회',
  })
  @ApiOkResponse({
    description: 'Form[]',
    type: [Form],
  })
  @Get()
  async getFormByApplicationId(
    @Query('applicationId') applicationId: number,
  ): Promise<Form[]> {
    return await this.formService.getFormByApplicationId(applicationId);
  }

  @ApiOperation({
    summary: 'id로 질문페이지 조회',
  })
  @ApiOkResponse({
    description: 'Form',
    type: Form,
  })
  @Get('/:id')
  async getFormById(@Param('id', ParseIntPipe) id: number) {
    return await this.formService.getFormById(id);
  }
}
