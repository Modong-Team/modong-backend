import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from 'src/club/club.entity';
import { Repository } from 'typeorm';
import { Application } from './application.entity';
import { RequestCreateApplicationDTO } from './dto/request.create-application.dto';
import { ResponseCreateApplicationDTO } from './dto/response.create-application.dto';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepo: Repository<Application>,
    @InjectRepository(Club) private readonly clubRepository: Repository<Club>,
  ) {}

  async createApplication(
    requestCreateApplicationDTO: RequestCreateApplicationDTO,
    clubId: number,
  ): Promise<ResponseCreateApplicationDTO> {
    const { title } = requestCreateApplicationDTO;
    const club = await this.clubRepository.findOne({
      where: {
        id: clubId,
      },
    });

    const application = this.applicationRepo.create({
      title,
      club,
    });
    const { id } = await this.applicationRepo.save(application);

    return { id };
  }

  async getAllApplication(clubId: number) {
    return await this.applicationRepo.find({
      relations: {
        club: true,
      },
      where: {
        club: {
          id: clubId,
        },
      },
    });
  }
}
