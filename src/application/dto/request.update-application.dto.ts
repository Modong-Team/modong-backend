import { ApiProperty } from '@nestjs/swagger';

export class RequestUpdateApplicationDTO {
  @ApiProperty({
    example: [1, 2, 3],
  })
  essentialIds: number[];
}
