import { ApiProperty } from '@nestjs/swagger';

export class EssentialAnswerDTO {
  @ApiProperty({
    example: 1,
  })
  essentialId: number;

  @ApiProperty({
    example: '백준호',
  })
  answer: string;
}

export class QuestionAnswerDTO {
  @ApiProperty({
    example: 1,
  })
  questionId: number;

  @ApiProperty({
    example: '[1, 2, 3]',
  })
  answer: string;
}

export class RequestSubmitApplicationDTO {
  @ApiProperty({
    example: 1,
  })
  applicationId: number;

  @ApiProperty({
    type: [EssentialAnswerDTO],
  })
  essentialAnswers: EssentialAnswerDTO[];

  @ApiProperty({
    type: [QuestionAnswerDTO],
  })
  questionAnswers: QuestionAnswerDTO[];
}
