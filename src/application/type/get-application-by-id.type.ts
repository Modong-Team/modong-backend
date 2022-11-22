import { ApiProperty } from '@nestjs/swagger';
import { Essential } from 'src/essential/essential.entity';
import { Form } from 'src/form/form.entity';
import { Application } from '../application.entity';

export class GetApplicationByIdDTO extends Application {
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

  @ApiProperty({
    description: 'forms',
    type: [Form],
    example: [
      {
        id: 1,
        title: '질문 1',
      },
    ],
  })
  forms: Form[];
}
