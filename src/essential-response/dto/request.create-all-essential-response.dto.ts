import { ApiProperty } from '@nestjs/swagger';

class EssentialResponsesDTO {
  @ApiProperty({
    example: 1,
  })
  applicationId: number;

  @ApiProperty({
    example: 1,
  })
  essentialId: number;

  @ApiProperty({
    example: '블라블라',
  })
  value: string;
}

export class RequestCreateAllEssentialResponseDTO {
  @ApiProperty({
    type: [EssentialResponsesDTO],
  })
  essentialResponses: EssentialResponsesDTO[];
}
