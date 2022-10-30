import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from 'src/application/application.entity';
import { Essential } from 'src/essential/essential.entity';
import { Repository } from 'typeorm';
import { RequestCreateAllEssentialResponseDTO } from './dto/request.create-all-essential-response.dto';
import { EssentialResponse } from './essential-response.entity';

Injectable();
export class EssentialResponseRepository {
  constructor(
    @InjectRepository(EssentialResponse)
    private readonly essentialResponseRepository: Repository<EssentialResponse>,
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
    @InjectRepository(Essential)
    private readonly essentialRepository: Repository<Essential>,
  ) {}

  async createAll(
    requestCreateAllEssentialResponseDTO: RequestCreateAllEssentialResponseDTO,
  ) {
    const essentialResponses = [];
    const { applicationId } =
      requestCreateAllEssentialResponseDTO.essentialResponses[0];
    const application = await this.applicationRepository.findOne({
      where: {
        id: applicationId,
      },
    });
    for (const er of requestCreateAllEssentialResponseDTO.essentialResponses) {
      const { essentialId, value } = er;
      const essentialResponse = this.essentialResponseRepository.create({
        value,
      });
      const essential = await this.essentialRepository.findOne({
        where: {
          id: essentialId,
        },
      });
      essentialResponse.application = application;
      essentialResponse.essential = essential;

      essentialResponses.push(essentialResponse);
    }

    await this.essentialResponseRepository.save(essentialResponses);
  }
}
