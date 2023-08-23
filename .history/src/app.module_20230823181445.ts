import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RoutesModule } from './routes/routes.module';
import { ConfigModule } from '@nestjs/config';
import { MapsModule } from './maps/maps.module';


// Grab the system env variable
const ENV = process.env.NODE_ENV;
console.log(`ENV=${ENV} ${}`);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: !ENV ? '.env.local' : '.env',
    }),
    PrismaModule,
    RoutesModule,
    MapsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
