import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ApplicantStatus } from 'src/enum/applicant-status.enum';
import { ApplicantService } from './applicant.service';
import { RequestSubmitApplicationDTO } from './dto/request.submit-application.dto';
import { ResponseSubmitApplicationDTO } from './dto/response.submit-application.dto';

@ApiTags('applicant')
@Controller('applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {}

  @ApiOperation({
    summary: '지원자 지원서 제출',
  })
  @ApiCreatedResponse({
    description: 'ReponseSubmitApplicationDTO',
    type: ResponseSubmitApplicationDTO,
  })
  @Post('submit-application')
  async submitApplication(
    @Body() requestSubmitApplicationDTO: RequestSubmitApplicationDTO,
  ) {
    const { applicationId, essentialAnswers, questionAnswers } =
      requestSubmitApplicationDTO;

    return await this.applicantService.submitApplication(
      applicationId,
      essentialAnswers,
      questionAnswers,
    );
  }

  @ApiOperation({
    summary: '지원서 id로 지원자 조회',
  })
  @ApiOkResponse({})
  @Get()
  async getApplicantsByApplicationId(
    @Query('applicationId') applicationId: number,
  ) {
    return await this.applicantService.getApplicantsByApplicationId(
      applicationId,
    );
  }

  @ApiOperation({
    summary: '지원자 상태 변경',
  })
  @Patch('/:id')
  async changeApplicantStatus(
    @Param('id') id: number,
    @Query('status') status: ApplicantStatus,
  ) {
    return await this.applicantService.changeApplicantStatus(id, status);
  }
}
