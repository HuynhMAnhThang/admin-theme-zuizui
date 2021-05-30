import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile-basic',
  templateUrl: './basic.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProProfileBaseComponent {
  basicNum = 0;
  amountNum = 0;
  goods = this.http.get('/profile/goods').pipe(
    tap((list: Array<{ num: number; amount: number }>) => {
      list.forEach((item) => {
        this.basicNum += Number(item.num);
        this.amountNum += Number(item.amount);
      });
    }),
  );
  goodsColumns: STColumn[] = [
    {
      title: 'Số sản phẩm',
      index: 'id',
      type: 'link',
      click: (item) => this.msg.success(`show ${item.id}`),
    },
    { title: 'Tên sản phẩm', index: 'name' },
    { title: 'Mã vạch', index: 'barcode' },
    { title: 'Đơn giá', index: 'price', type: 'currency' },
    { title: 'Số lượng / cái)', index: 'num', className: 'text-right' },
    { title: 'Số tiền', index: 'amount', type: 'currency' },
  ];
  progress = this.http.get('/profile/progress');
  progressColumns: STColumn[] = [
    { title: 'Thời gian', index: 'time' },
    { title: 'Tiến độ hiện tại', index: 'rate' },
    {
      title: 'Trạng thái',
      index: 'status',
      type: 'badge',
      badge: {
        success: { text: 'Thành công', color: 'success' },
        processing: { text: 'Đang Xử lý', color: 'processing' },
      },
    },
    { title: 'ID nhà điều hành', index: 'operator' },
    { title: 'Thời gian xử lý', index: 'cost' },
  ];

  constructor(private http: _HttpClient, private msg: NzMessageService) {}
}
