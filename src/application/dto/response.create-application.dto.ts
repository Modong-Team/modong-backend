import { ApiProperty } from '@nestjs/swagger';

export class ResponseCreateApplicationDTO {
  @ApiProperty({
    example: 0,
  })
  id: number;
}
