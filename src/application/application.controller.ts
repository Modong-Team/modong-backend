import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApplicationService } from './application.service';
import { RequestCreateApplicationDTO } from './dto/request.create-application.dto';
import { ResponseCreateApplicationDTO } from './dto/response.create-application.dto';

@ApiTags('application')
@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @ApiBody({
    description: 'RequestCreateApplicationDTO',
    type: RequestCreateApplicationDTO,
  })
  @ApiCreatedResponse({
    description: 'ResponseCreateApplicationDTO',
    type: ResponseCreateApplicationDTO,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
  })
  @Post()
  async createApplication(
    @Body() requestCreateApplicationDTO: RequestCreateApplicationDTO,
  ): Promise<ResponseCreateApplicationDTO> {
    return await this.applicationService.createApplication(
      requestCreateApplicationDTO,
    );
  }
}
