import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from './application/application.module';
import { EssentialModule } from './essential/essential.module';
import { ClubModule } from './club/club.module';
import { FormModule } from './form/form.module';
import { ApplicantModule } from './applicant/applicant.module';

const returnNodeEnv = () => {
  if (process.env.NODE_ENV === 'local') {
    return '.local.env';
  } else if (process.env.NODE_ENV === 'development') {
    return '.development.env';
  } else {
    return '.production.env';
  }
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: returnNodeEnv(),
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    ApplicationModule,
    EssentialModule,
    ClubModule,
    FormModule,
    ApplicantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
