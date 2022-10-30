import { Injectable } from '@nestjs/common';
import { ApplicationRepository } from './application.repository';
import { RequestCreateApplicationDTO } from './dto/request.create-application.dto';
import { ResponseCreateApplicationDTO } from './dto/response.create-application.dto';

@Injectable()
export class ApplicationService {
  constructor(private readonly applicationRepository: ApplicationRepository) {}

  async createApplication(
    requestCreateApplicationDTO: RequestCreateApplicationDTO,
  ): Promise<ResponseCreateApplicationDTO> {
    const { id } = await this.applicationRepository.create(
      requestCreateApplicationDTO,
    );
    return {
      id,
    };
  }
}
