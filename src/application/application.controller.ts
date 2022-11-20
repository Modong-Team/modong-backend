import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Application } from './application.entity';
import { ApplicationService } from './application.service';
import { RequestCreateApplicationDTO } from './dto/request.create-application.dto';
import { RequestUpdateApplicationDTO } from './dto/request.update-application.dto';
import { ResponseCreateApplicationDTO } from './dto/response.create-application.dto';
import { ApplicationWithEssentials } from './type/application-with-essentials.type';

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

  @ApiOperation({
    summary: '지원서 필수질문 구성 수정',
  })
  @ApiBody({
    description: 'RequestUpdateApplicationDTO',
    type: RequestUpdateApplicationDTO,
  })
  @ApiOkResponse({
    description: 'Application',
    type: Application,
  })
  @Patch(':id')
  async updateApplication(
    @Body()
    requestUpdateApplicationDTO: RequestUpdateApplicationDTO,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Application> {
    return await this.applicationService.updateApplication(
      requestUpdateApplicationDTO,
      id,
    );
  }

  @ApiOperation({
    summary: '지원서 id로 지원서 조회',
  })
  @ApiOkResponse({
    description: 'Application',
    type: ApplicationWithEssentials,
  })
  @Get('/:id')
  async getApplicationById(@Param('id', ParseIntPipe) id: number) {
    return await this.applicationService.getApplicationById(id);
  }
}
