import { ApiProperty } from '@nestjs/swagger';

export class ResponseCreateFormDTO {
  @ApiProperty()
  id: number;
}
