import { ApiProperty } from '@nestjs/swagger';

export class ResponseSubmitApplicationDTO {
  @ApiProperty({
    example: 1,
  })
  id: number;
}
