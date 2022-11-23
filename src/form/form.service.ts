import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from 'src/application/application.entity';
import { QuestionType } from 'src/enum/question-type.enum';
import { QuestionOption } from 'src/question-option/question-option.entity';
import { Question } from 'src/question/question.entity';
import { Repository } from 'typeorm';
import { RequestCreateFormDTO } from './dto/request.create-form.dto';
import { RequestUpdateFormByIdDTO } from './dto/request.update-form-by-id.dto';
import { Form } from './form.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private readonly formRepository: Repository<Form>,
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
    @InjectRepository(QuestionOption)
    private readonly optionRepository: Repository<QuestionOption>,
  ) {}

  async createForm(requestCreateFormDTO: RequestCreateFormDTO) {
    const { applicationId, title, questions } = requestCreateFormDTO;

    const application = await this.applicationRepository.findOne({
      where: {
        id: applicationId,
      },
    });

    const form = this.formRepository.create({
      title,
      application,
    });

    const { id } = await this.formRepository.save(form);

    for (const question of questions) {
      const q = this.questionRepository.create({
        content: question.content,
        form,
      });

      if (
        question.type === QuestionType.CheckboxQuestion ||
        question.type === QuestionType.RadioQuestion
      ) {
        for (const optionValue of question.options) {
          const option = this.optionRepository.create({
            value: optionValue,
            question: q,
          });

          await this.optionRepository.save(option);
        }
      }

      await this.questionRepository.save(q);
    }

    return {
      id,
    };
  }

  async updateFormById(
    formId: number,
    requestUpdateFormByIdDTO: RequestUpdateFormByIdDTO,
  ) {
    const { title, questions } = requestUpdateFormByIdDTO;

    const form = await this.formRepository.findOne({
      where: {
        id: formId,
      },
    });

    form.title = title;

    const DBQuestions = [];
    for (const question of questions) {
      let q: Question;

      if (
        question.type === QuestionType.CheckboxQuestion ||
        question.type === QuestionType.RadioQuestion
      ) {
        q = this.questionRepository.create({
          content: question.content,
          form,
        });
        await this.questionRepository.save(q);
        const DBOptions = [];
        for (const optionValue of question.options) {
          const option = this.optionRepository.create({
            value: optionValue,
            question: q,
          });
          await this.optionRepository.save(option);
          DBOptions.push(option);
        }

        q.questionOptions = DBOptions;
        DBQuestions.push(q);
      }
      form.questions = DBQuestions;

      const { id } = await this.formRepository.save(form);

      return { id };
    }
  }

  async getFormByApplicationId(applicationId: number) {
    const forms = await this.formRepository.find({
      relations: ['questions', 'questions.options'],
      where: {
        application: {
          id: applicationId,
        },
      },
    });
    return forms;
  }

  async getFormById(id: number) {
    return await this.formRepository.findOne({
      relations: {
        questions: {
          questionOptions: true,
        },
      },
      where: {
        id,
      },
    });
  }
}
