import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
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

  @ApiOperation({
    summary: '동아리의 전체 지원서 조회',
  })
  @ApiOkResponse({
    description: 'Application[]',
    type: [Application],
  })
  @Get('/all')
  async getAllApplication(
    @Query('clubId') clubId: number,
  ): Promise<Application[]> {
    return await this.applicationService.getAllApplication(clubId);
  }

  @ApiOperation({
    summary: '지원서 생성',
  })
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
    @Query('clubId') clubId: number,
  ): Promise<ResponseCreateApplicationDTO> {
    return await this.applicationService.createApplication(
      requestCreateApplicationDTO,
      clubId,
    );
  }
}
