import { IsNumber } from '@nestjs/class-validator';

export class DecreaseStockRequestDto {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly id: number;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  public readonly orderId: number;
}
