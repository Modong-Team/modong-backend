import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './application.entity';
import { RequestCreateApplicationDTO } from './dto/request.create-application.dto';

@Injectable()
export class ApplicationRepository {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
  ) {}

  async create(
    requestCreateApplicationDTO: RequestCreateApplicationDTO,
  ): Promise<Application> {
    const { title } = requestCreateApplicationDTO;

    const application = this.applicationRepository.create({
      title,
    });

    return await this.applicationRepository.save(application);
  }
}
