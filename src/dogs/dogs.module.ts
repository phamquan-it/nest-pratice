import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { LoggerMiddleware } from 'src/logger/logger.middleware';

@Module({
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'dogs', method: RequestMethod.ALL });
  }
}
