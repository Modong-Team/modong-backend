import { ApiProperty } from '@nestjs/swagger';

export class ResponseCreateApplicationDTO {
  @ApiProperty({
    example: 1,
  })
  id: number;
}
