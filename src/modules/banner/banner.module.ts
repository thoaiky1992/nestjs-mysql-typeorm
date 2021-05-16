import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerController } from './banner.controller';
import { Banner } from './banner.entity';
import { BannerService } from './banner.service';

@Module({
  imports: [TypeOrmModule.forFeature([Banner])],
  providers: [BannerService],
  exports: [BannerService],
  controllers: [BannerController]
})
export class BannerModule {}
