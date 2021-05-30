import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NoticeIconList, NoticeIconSelect, NoticeItem } from '@delon/abc/notice-icon';
import { add, formatDistanceToNow, parse } from 'date-fns';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'header-notify',
  template: `
    <notice-icon
      [data]="data"
      [count]="count"
      [loading]="loading"
      btnClass="alain-default__nav-item"
      btnIconClass="alain-default__nav-item-icon"
      (select)="select($event)"
      (clear)="clear($event)"
      (popoverVisibleChange)="loadData()"
    ></notice-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNotifyComponent {
  data: NoticeItem[] = [
    {
      title: 'Thông báo',
      list: [],
      emptyText: 'Bạn đã xem tất cả Thông báo',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
      clearText: 'Xem tất cả Thông báo',
    },
    {
      title: 'Tin tức',
      list: [],
      emptyText: 'Bạn đã đọc tất cả Tin tức',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
      clearText: 'Xem tất cả Tin tức',
    },
    {
      title: 'Đang chờ xử lý',
      list: [],
      emptyText: 'Bạn đã làm tất cả Đang chờ xử lý',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
      clearText: 'Xem tất cả Đang chờ xử lý',
    },
  ];
  count = 5;
  loading = false;

  constructor(private msg: NzMessageService, private nzI18n: NzI18nService, private cdr: ChangeDetectorRef) {}

  private updateNoticeData(notices: NoticeIconList[]): NoticeItem[] {
    const data = this.data.slice();
    data.forEach((i) => (i.list = []));

    notices.forEach((item) => {
      const newItem = { ...item } as NoticeIconList;
      if (typeof newItem.datetime === 'string') {
        newItem.datetime = parse(newItem.datetime, 'yyyy-MM-dd', new Date());
      }
      if (newItem.datetime) {
        newItem.datetime = formatDistanceToNow(newItem.datetime as Date, { locale: this.nzI18n.getDateLocale() });
      }
      if (newItem.extra && newItem.status) {
        newItem.color = ({
          todo: undefined,
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        } as { [key: string]: string | undefined })[newItem.status];
      }
      data.find((w) => w.title === newItem.type)!.list.push(newItem);
    });
    return data;
  }

  loadData(): void {
    if (this.loading) {
      return;
    }
    this.loading = true;
    setTimeout(() => {
      const now = new Date();
      this.data = this.updateNoticeData([
        {
          id: '000000001',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: 'Bạn đã nhận được 14 báo cáo hàng tuần mới',
          datetime: add(now, { days: 10 }),
          type: 'Thông báo',
        },
        {
          id: '000000002',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          title: 'Qu Nini được đề xuất của bạn đã vượt qua vòng phỏng vấn thứ ba',
          datetime: add(now, { days: -3 }),
          type: 'Thông báo',
        },
        {
          id: '000000003',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: 'Mẫu này có thể phân biệt nhiều loại Thông báo',
          datetime: add(now, { months: -3 }),
          read: true,
          type: 'Thông báo',
        },
        {
          id: '000000004',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
          title: 'Biểu tượng bên trái dùng để phân biệt các loại',
          datetime: add(now, { years: -1 }),
          type: 'Thông báo',
        },
        {
          id: '000000005',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: 'Nội dung không được vượt quá hai dòng và nó sẽ tự động bị cắt bớt khi vượt quá',
          datetime: '2017-08-07',
          type: 'Thông báo',
        },
        {
          id: '000000006',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: 'Qu Lili đã nhận xét về bạn',
          description: 'Loại mẫu này dùng để nhắc nhở những ai đã tương tác với bạn, hãy đặt ảnh đại diện của "ai" ở bên trái',
          datetime: '2017-08-07',
          type: 'Tin tức',
        },
        {
          id: '000000007',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: 'Zhu Fangyou đã trả lời bạn',
          description: 'Loại mẫu này dùng để nhắc nhở những ai đã tương tác với bạn, hãy đặt ảnh đại diện của "ai" ở bên trái',
          datetime: '2017-08-07',
          type: 'Tin tức',
        },
        {
          id: '000000008',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: 'tiêu đề',
          description: 'Loại mẫu này dùng để nhắc nhở những ai đã tương tác với bạn, hãy đặt ảnh đại diện của "ai" ở bên trái',
          datetime: '2017-08-07',
          type: 'Tin tức',
        },
        {
          id: '000000009',
          title: 'Tên nhiệm vụ',
          description: 'Nhiệm vụ cần được bắt đầu trước 20:00 ngày 01-01-2017',
          extra: 'chưa bắt đầu',
          status: 'todo',
          type: 'Đang chờ xử lý',
        },
        {
          id: '000000010',
          title: 'Thay đổi mã khẩn cấp của bên thứ ba',
          description: 'Guanlin được gửi vào 2017-01-06, nhiệm vụ thay đổi mã phải được hoàn thành trước 2017-01-07',
          extra: 'Sắp hết hạn',
          status: 'urgent',
          type: 'Đang chờ xử lý',
        },
        {
          id: '000000011',
          title: 'Kỳ thi An toàn Thông tin',
          description: 'Chỉ định Zhuer hoàn thành bản cập nhật và phát hành trước ngày 1 tháng 1 năm 2017',
          extra: '8 ngày trôi qua',
          status: 'doing',
          type: 'Đang chờ xử lý',
        },
        {
          id: '000000012',
          title: 'ABCD Phiên bản phát hành',
          description: 'Guanlin được gửi vào 2017-01-06, nhiệm vụ thay đổi mã phải được hoàn thành trước 2017-01-07',
          extra: 'Xử lý',
          status: 'processing',
          type: 'Đang chờ xử lý',
        },
      ]);

      this.loading = false;
      this.cdr.detectChanges();
    }, 500);
  }

  clear(type: string): void {
    this.msg.success(`làm trống ${type}`);
  }

  select(res: NoticeIconSelect): void {
    this.msg.success(`Đã nhấp ${res.title} 的 ${res.item.title}`);
  }
}
