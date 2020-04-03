import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import rcpMethod from './rcpMethods'
const jayson = require('jayson')


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(jayson.server(rcpMethod).middleware())
      .exclude({ path: '/populacao/:uf', method: RequestMethod.GET })
      .forRoutes(AppController);
  }

}
