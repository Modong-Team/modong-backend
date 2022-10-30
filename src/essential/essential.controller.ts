import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Essential } from './essential.entity';
import { EssentialService } from './essential.service';

@ApiTags('essential')
@Controller('essential')
export class EssentialController {
  constructor(private readonly essentialService: EssentialService) {}

  @ApiOkResponse({
    description: 'Essential[]',
    type: [Essential],
  })
  @Get('/all')
  async getAllEssentials(): Promise<Essential[]> {
    return await this.essentialService.getAllEssentials();
  }
}
