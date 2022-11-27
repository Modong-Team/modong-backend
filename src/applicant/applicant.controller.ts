import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
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
}
