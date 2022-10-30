import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Application } from './application.entity';
import { ApplicationService } from './application.service';
import { RequestCreateApplicationDTO } from './dto/request.create-application.dto';
import { ResponseCreateApplicationDTO } from './dto/response.create-application.dto';

@ApiTags('application')
@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @ApiOkResponse({
    description: 'Application[]',
    type: [Application],
  })
  @Get('/all')
  async getAllApplication(): Promise<Application[]> {
    return await this.applicationService.getAllApplication();
  }

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
