import { ApiProperty } from '@nestjs/swagger';
import { CreateQuestionType } from '../type/create-question.type';

export class RequestUpdateFormByIdDTO {
  @ApiProperty()
  title: string;

  @ApiProperty({
    type: [CreateQuestionType],
  })
  questions: Array<CreateQuestionType>;
}
