import { Injectable } from '@angular/core';

@Injectable()
export class TransferService {
  step = 1;

  /**
   *tài khoản thanh toán
   */
  pay_account = '';

  /**
   *Nhận loại tài khoản
   */
  receiver_type: 'alipay' | 'bank' = 'alipay';

  get receiver_type_str(): string {
    return this.receiver_type === 'alipay' ? 'Alipay' : 'ngân hàng';
  }

  /**
   * Những tài khoản có thể nhận được
   */
  receiver_account = '';

  /**
   * Tên nhận
   */
  receiver_name = '';

  /**
   * Số tiền
   */
  amount = 500;

  /**
  * Mật khẩu thanh toán
   */
  password = '123456';

  again(): void {
    this.step = 0;
    this.pay_account = 'ant-design@alipay.com';
    this.receiver_type = 'alipay';
    this.receiver_account = 'test@example.com';
    this.receiver_name = 'asdf';
    this.amount = 500;
  }

  constructor() {
    this.again();
  }
}
