import { ApiProperty } from '@nestjs/swagger';
import { Essential } from 'src/essential/essential.entity';
import { Application } from '../application.entity';

export class ApplicationWithEssentials extends Application {
  @ApiProperty({
    description: 'essentials',
    type: [Essential],
    example: [
      {
        id: 1,
        content: '이름이 무엇인가요?',
      },
    ],
  })
  essentials: Essential[];
}
