import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetailController } from './order_detail.controller';
import { OrderDetail } from './order_detail.entity';
import { OrderDetailService } from './order_detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetail])],
  providers: [OrderDetailService],
  exports: [OrderDetailService],
  controllers: [OrderDetailController]
})
export class OrderDetailModule {}
