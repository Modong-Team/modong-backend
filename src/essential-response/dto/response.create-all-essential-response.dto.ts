import { ApiProperty } from '@nestjs/swagger';

export class ResponseCreateAllEssentialResponseDTO {
  @ApiProperty({
    example: 1,
  })
  applicationId: number;
}
