import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { STChange, STColumn, STComponent, STData } from '@delon/abc/st';
import { _HttpClient } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProTableListComponent implements OnInit {
  q: {
    pi: number;
    ps: number;
    no: string;
    sorter: string;
    status: number | null;
    statusList: NzSafeAny[];
  } = {
    pi: 1,
    ps: 10,
    no: '',
    sorter: '',
    status: null,
    statusList: [],
  };
  data: any[] = [];
  loading = false;
  status = [
    { index: 0, text: 'tắt', value: false, type: 'default', checked: false },
    {
      index: 1,
      text: 'Đang chạy',
      value: false,
      type: 'processing',
      checked: false,
    },
    { index: 2, text: 'Trực tuyến', value: false, type: 'success', checked: false },
    { index: 3, text: 'khác thường', value: false, type: 'error', checked: false },
  ];
  @ViewChild('st', { static: true })
  st!: STComponent;
  columns: STColumn[] = [
    { title: '', index: 'key', type: 'checkbox' },
    { title: 'Quy tắc số', index: 'no' },
    { title: 'sự miêu tả', index: 'description' },
    {
      title: 'Số lượng cuộc gọi dịch vụ',
      index: 'callNo',
      type: 'number',
      format: (item) => `${item.callNo} 0000 VND`,
      sort: {
        compare: (a, b) => a.callNo - b.callNo,
      },
    },
    {
      title: 'trạng thái',
      index: 'status',
      render: 'status',
      filter: {
        menus: this.status,
        fn: (filter, record) => record.status === filter.index,
      },
    },
    {
      title: 'Cập nhật thời gian',
      index: 'updatedAt',
      type: 'date',
      sort: {
        compare: (a, b) => a.updatedAt - b.updatedAt,
      },
    },
    {
      title: 'điều hành',
      buttons: [
        {
          text: 'Cấu hình',
          click: (item) => this.msg.success(`Cấu hình${item.no}`),
        },
        {
          text: 'Đăng ký nhận thông báo',
          click: (item) => this.msg.success(`Đăng ký nhận thông báo${item.no}`),
        },
      ],
    },
  ];
  selectedRows: STData[] = [];
  description = '';
  totalCallNo = 0;
  expandForm = false;

  constructor(private http: _HttpClient, public msg: NzMessageService, private modalSrv: NzModalService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    this.q.statusList = this.status.filter((w) => w.checked).map((item) => item.index);
    if (this.q.status !== null && this.q.status > -1) {
      this.q.statusList.push(this.q.status);
    }
    this.http
      .get('/rule', this.q)
      .pipe(
        map((list: Array<{ status: number; statusText: string; statusType: string }>) =>
          list.map((i) => {
            const statusItem = this.status[i.status];
            i.statusText = statusItem.text;
            i.statusType = statusItem.type;
            return i;
          }),
        ),
        tap(() => (this.loading = false)),
      )
      .subscribe((res) => {
        this.data = res;
        this.cdr.detectChanges();
      });
  }

  stChange(e: STChange): void {
    switch (e.type) {
      case 'checkbox':
        this.selectedRows = e.checkbox!;
        this.totalCallNo = this.selectedRows.reduce((total, cv) => total + cv.callNo, 0);
        this.cdr.detectChanges();
        break;
      case 'filter':
        this.getData();
        break;
    }
  }

  remove(): void {
    this.http.delete('/rule', { nos: this.selectedRows.map((i) => i.no).join(',') }).subscribe(() => {
      this.getData();
      this.st.clearCheck();
    });
  }

  approval(): void {
    this.msg.success(`Tán thành ${this.selectedRows.length} cây bút`);
  }

  add(tpl: TemplateRef<{}>): void {
    this.modalSrv.create({
      nzTitle: 'Quy tắc mới',
      nzContent: tpl,
      nzOnOk: () => {
        this.loading = true;
        this.http.post('/rule', { description: this.description }).subscribe(() => this.getData());
      },
    });
  }

  reset(): void {
    // wait form reset updated finished
    setTimeout(() => this.getData());
  }
}
