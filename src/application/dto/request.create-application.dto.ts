import { ApiProperty } from '@nestjs/swagger';

export class RequestCreateApplicationDTO {
  @ApiProperty({
    example: '모동 지원서 2021',
  })
  title: string;
}
