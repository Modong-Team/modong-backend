import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './application.entity';
import { ApplicationRepository } from './application.repository';
import { RequestCreateApplicationDTO } from './dto/request.create-application.dto';
import { ResponseCreateApplicationDTO } from './dto/response.create-application.dto';

@Injectable()
export class ApplicationService {
  constructor(
    private readonly applicationRepository: ApplicationRepository,
    @InjectRepository(Application)
    private readonly applicationRepo: Repository<Application>,
  ) {}

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

  async getAllApplication() {
    return await this.applicationRepo.find();
  }
}
