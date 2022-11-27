import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from 'src/application/application.entity';
import { EssentialAnswer } from 'src/essential-answer/essential-answer.entity';
import { Essential } from 'src/essential/essential.entity';
import { QuestionAnswer } from 'src/question-answer/question-answer.entity';
import { Question } from 'src/question/question.entity';
import { Repository } from 'typeorm';
import { Applicant } from './applicant.entity';
import {
  EssentialAnswerDTO,
  QuestionAnswerDTO,
} from './dto/request.submit-application.dto';

@Injectable()
export class ApplicantService {
  constructor(
    @InjectRepository(Applicant)
    private readonly applicantRepository: Repository<Applicant>,
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
    @InjectRepository(Essential)
    private readonly essentialRepository: Repository<Essential>,
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(EssentialAnswer)
    private readonly essentialAnswerRepository: Repository<EssentialAnswer>,
    @InjectRepository(QuestionAnswer)
    private readonly questionAnswerRepository: Repository<QuestionAnswer>,
  ) {}

  async submitApplication(
    applicationId: number,
    essentialAnswers: EssentialAnswerDTO[],
    questionAnswers: QuestionAnswerDTO[],
  ) {
    const application = await this.applicationRepository.findOne({
      where: {
        id: applicationId,
      },
    });

    const new_applicant = this.applicantRepository.create({
      application,
    });
    const applicant = await this.applicantRepository.save(new_applicant);

    for (const essentialAnswer of essentialAnswers) {
      const essential = await this.essentialRepository.findOne({
        where: {
          id: essentialAnswer.essentialId,
        },
      });

      const new_answer = this.essentialAnswerRepository.create({
        answer: essentialAnswer.answer,
        applicant,
        essential,
      });
      await this.essentialAnswerRepository.save(new_answer);
    }

    for (const questionAnswer of questionAnswers) {
      const question = await this.questionRepository.findOne({
        where: {
          id: questionAnswer.questionId,
        },
      });

      const new_answer = this.questionAnswerRepository.create({
        answer: questionAnswer.answer,
        applicant,
        question,
      });
      await this.questionAnswerRepository.save(new_answer);
    }

    return {
      id: new_applicant.id,
    };
  }
}
