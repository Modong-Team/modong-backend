import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RadioOption } from './radio-option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RadioOption])],
})
export class RadioOptionModule {}
