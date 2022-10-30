import { Injectable } from '@nestjs/common';
import { RequestCreateAllEssentialResponseDTO } from './dto/request.create-all-essential-response.dto';
import { EssentialResponseRepository } from './essential-response.repository';

@Injectable()
export class EssentialResponseService {
  constructor(
    private readonly essentialResponseRepository: EssentialResponseRepository,
  ) {}

  async createAllEssentialResponses(
    requestCreateAllEssentialResponseDTO: RequestCreateAllEssentialResponseDTO,
  ) {
    const { applicationId } =
      requestCreateAllEssentialResponseDTO.essentialResponses[0];

    await this.essentialResponseRepository.createAll(
      requestCreateAllEssentialResponseDTO,
    );

    return {
      applicationId,
    };
  }
}
