import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Glo
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
