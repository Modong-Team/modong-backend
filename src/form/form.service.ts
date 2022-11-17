import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Application } from 'src/application/application.entity';
import { CheckboxOption } from 'src/checkbox-option/checkbox-option.entity';
import { QuestionType } from 'src/enum/question-type.enum';
import { CheckboxQuestion } from 'src/question/checkbox-question.entity';
import { Question } from 'src/question/question.entity';
import { RadioQuestion } from 'src/question/radio-question.entity';
import { RadioOption } from 'src/radio-option/radio-option.entity';
import { Repository } from 'typeorm';
import { RequestCreateFormDTO } from './dto/request.create-form.dto';
import { RequestUpdateFormByIdDTO } from './dto/request.update-form-by-id.dto';
import { Form } from './form.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private readonly formRepository: Repository<Form>,
    @InjectRepository(CheckboxQuestion)
    private readonly checkboxQuestionRepository: Repository<CheckboxQuestion>,
    @InjectRepository(RadioQuestion)
    private readonly radioQuestionRepository: Repository<RadioQuestion>,
    @InjectRepository(CheckboxOption)
    private readonly checkboxOptionRepository: Repository<CheckboxOption>,
    @InjectRepository(RadioOption)
    private readonly radioOptionRepository: Repository<RadioOption>,
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
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
      if (question.type === QuestionType.CheckboxQuestion) {
        const q = this.checkboxQuestionRepository.create({
          content: question.content,
          form,
        });
        await this.checkboxQuestionRepository.save(q);
        for (const optionValue of question.options) {
          const option = this.checkboxOptionRepository.create({
            value: optionValue,
            question: q,
          });

          await this.checkboxOptionRepository.save(option);
        }
        continue;
      }

      if (question.type === QuestionType.RadioQuestion) {
        const q = this.radioQuestionRepository.create({
          content: question.content,
          form,
        });
        await this.radioQuestionRepository.save(q);
        for (const optionValue of question.options) {
          const option = this.radioOptionRepository.create({
            value: optionValue,
            question: q,
          });

          await this.radioOptionRepository.save(option);
        }
        continue;
      }

      const q = this.questionRepository.create({
        content: question.content,
        form,
      });

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
      let q;
      if (question.type === QuestionType.CheckboxQuestion) {
        q = this.checkboxQuestionRepository.create({
          content: question.content,
          form,
        });
        await this.checkboxQuestionRepository.save(q);
        const DBOptions = [];
        for (const optionValue of question.options) {
          const option = this.checkboxOptionRepository.create({
            value: optionValue,
            question: q,
          });
          await this.checkboxOptionRepository.save(option);
          DBOptions.push(option);
        }
        q.checkboxOptions = DBOptions;
        DBQuestions.push(q);
        continue;
      }

      if (question.type === QuestionType.RadioQuestion) {
        q = this.radioQuestionRepository.create({
          content: question.content,
          form,
        });
        await this.radioQuestionRepository.save(q);
        const DBOptions = [];
        for (const optionValue of question.options) {
          const option = this.radioOptionRepository.create({
            value: optionValue,
            question: q,
          });
          await this.radioOptionRepository.save(option);
          DBOptions.push(option);
        }
        q.radioOptions = DBOptions;
        DBQuestions.push(q);
        continue;
      }
      q = this.questionRepository.create({
        content: question.content,
        form,
      });
      await this.questionRepository.save(q);
      DBQuestions.push(q);
    }
    form.questions = DBQuestions;

    const { id } = await this.formRepository.save(form);

    return { id };
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
}
