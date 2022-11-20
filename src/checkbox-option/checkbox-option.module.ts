import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckboxOption } from './checkbox-option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CheckboxOption])],
})
export class CheckboxOptionModule {}
