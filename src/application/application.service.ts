import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from 'src/club/club.entity';
import { Essential } from 'src/essential/essential.entity';
import { Repository } from 'typeorm';
import { Application } from './application.entity';
import { RequestCreateApplicationDTO } from './dto/request.create-application.dto';
import { RequestUpdateApplicationDTO } from './dto/request.update-application.dto';
import { ResponseCreateApplicationDTO } from './dto/response.create-application.dto';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
    @InjectRepository(Club) private readonly clubRepository: Repository<Club>,
    @InjectRepository(Essential)
    private readonly essentialRepository: Repository<Essential>,
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

    const application = this.applicationRepository.create({
      title,
      club,
    });
    const { id } = await this.applicationRepository.save(application);

    return { id };
  }

  async getAllApplication(clubId: number) {
    return await this.applicationRepository.find({
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

  async updateApplication(
    requestUpdateApplicationDTO: RequestUpdateApplicationDTO,
    id: number,
  ) {
    const { essentialIds } = requestUpdateApplicationDTO;
    const application = await this.applicationRepository.findOne({
      where: {
        id,
      },
    });

    const essentials = [];

    for (const essentialId of essentialIds) {
      const essential = await this.essentialRepository.findOne({
        where: {
          id: essentialId,
        },
      });

      essentials.push(essential);
    }
    application.essentials = essentials;
    return await this.applicationRepository.save(application);
  }

  async getApplicationById(id: number) {
    return await this.applicationRepository.findOne({
      relations: ['essentials', 'forms'],
      where: {
        id,
      },
    });
  }

  async deleteApplicationById(id: number) {
    await this.applicationRepository.delete(id);

    return;
  }
}
