import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { databaseProviders } from './providers/database.providers';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
