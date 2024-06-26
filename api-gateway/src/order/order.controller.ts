import {
  Controller,
  Inject,
  Post,
  OnModuleInit,
  UseGuards,
  Req,
  Body,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  CreateOrderResponse,
  OrderServiceClient,
  ORDER_SERVICE_NAME,
  CreateOrderRequest,
} from './order.pb';
import { AuthGuard } from '../auth/auth.guard';
import { Request } from 'express';

@Controller('order')
export class OrderController implements OnModuleInit {
  private svc: OrderServiceClient;

  @Inject(ORDER_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<OrderServiceClient>(ORDER_SERVICE_NAME);
  }

  @Post()
  @UseGuards(AuthGuard)
  private async createOrder(
    @Req() req: Request,
    @Body() body: CreateOrderRequest,
  ): Promise<Observable<CreateOrderResponse>> {
    body['userId'] = <number>req['user'];

    return this.svc.createOrder(body);
  }
}
