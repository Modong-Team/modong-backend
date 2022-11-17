import { ApiProperty } from '@nestjs/swagger';
import { QuestionType } from 'src/enum/question-type.enum';

export class CreateQuestionType {
  @ApiProperty({
    enum: QuestionType,
  })
  type: QuestionType;

  @ApiProperty({
    example: 'MBTI?',
  })
  content: string;

  @ApiProperty({
    example: ['INTJ', 'INFP'],
  })
  options?: string[];
}
