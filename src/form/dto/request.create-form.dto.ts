import { ApiProperty } from '@nestjs/swagger';
import { CreateQuestionType } from '../type/create-question.type';

export class RequestCreateFormDTO {
  @ApiProperty()
  applicationId: number;

  @ApiProperty()
  title: string;

  @ApiProperty({
    type: [CreateQuestionType],
  })
  questions: Array<CreateQuestionType>;
}
