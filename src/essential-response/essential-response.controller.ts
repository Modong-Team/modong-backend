import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { RequestCreateAllEssentialResponseDTO } from './dto/request.create-all-essential-response.dto';
import { ResponseCreateAllEssentialResponseDTO } from './dto/response.create-all-essential-response.dto';
import { EssentialResponseService } from './essential-response.service';

@ApiTags('essential-response')
@Controller('essential-response')
export class EssentialResponseController {
  constructor(
    private readonly essentialResponseService: EssentialResponseService,
  ) {}

  @ApiBody({
    description: 'RequestCreateAllEssentialResponseDTO',
    type: RequestCreateAllEssentialResponseDTO,
  })
  @ApiCreatedResponse({
    description: 'ResponseCreateAllEssentialResponseDTO',
    type: ResponseCreateAllEssentialResponseDTO,
  })
  @Post('/all')
  async createAllEssentialResponses(
    @Body()
    requestCreateAllEssentialResponseDTO: RequestCreateAllEssentialResponseDTO,
  ): Promise<ResponseCreateAllEssentialResponseDTO> {
    return await this.essentialResponseService.createAllEssentialResponses(
      requestCreateAllEssentialResponseDTO,
    );
  }
}
