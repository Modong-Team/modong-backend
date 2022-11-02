import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Essential } from './essential.entity';
import { EssentialService } from './essential.service';

@ApiTags('essential')
@Controller('essential')
export class EssentialController {
  constructor(private readonly essentialService: EssentialService) {}

  @ApiOperation({
    summary: '전체 필수 질문 조회',
  })
  @ApiOkResponse({
    description: 'Essential[]',
    type: [Essential],
  })
  @Get('/all')
  async getAllEssentials(): Promise<Essential[]> {
    return await this.essentialService.getAllEssentials();
  }
}
