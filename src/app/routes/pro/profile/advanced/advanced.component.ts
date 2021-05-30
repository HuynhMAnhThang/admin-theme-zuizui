import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { _HttpClient } from '@delon/theme';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTabChangeEvent } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-profile-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProProfileAdvancedComponent implements OnInit {
  list: Array<{ [key: string]: NzSafeAny }> = [];
  data = {
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
  };
  opColumns: STColumn[] = [
    {title: 'Kiểu hoạt động', index: 'kiểu'},
    {title: 'Operator', index: 'name'},
    {title: 'Kết quả thực thi', index: 'status', render: 'status'},
    {title: 'Thời gian hoạt động', index: 'updatedAt', type: 'date'},
    {title: 'Remarks', index: 'memo', default: '-'},
  ];

  constructor(public msg: NzMessageService, private http: _HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.http.get('/profile/advanced').subscribe((res) => {
      this.data = res;
      this.change({ index: 0, tab: null });
      this.cdr.detectChanges();
    });
  }

  change(args: NzTabChangeEvent): void {
    this.list = (this.data as NzSafeAny)[`advancedOperation${args.index! + 1}`];
  }
}
